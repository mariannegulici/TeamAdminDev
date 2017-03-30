var async = require('async');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var socketIO = require('socket.io')(server);
var r = require('rethinkdb');

var config = require(__dirname + '/server/server-config.js');
var IO = require(__dirname + '/server/socket.js')

/**
 * Serve index file from /dist folder for frontend assets
 */
app.use(express.static(path.join(__dirname, 'dist')));

app.use(bodyParser.json());

/**
 * REST api entry points
 */
app.route('/assigntask')
   .post(assignTask);

app.route('/notes')
   .post(addNote);

app.route('/tasks/:projectid')
   .get(getTasksbyProjectID);

app.route('/tasks')
   .get(getTasks);

app.route('/team')
   .get(getTeam);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

/**
 * Store the database connection and start listening on the port
 * defined in the server-config.js file
 * @param {any} connection - Database connection
 */
function startExpress(connection) {
    app._rdbConn = connection;
    server.listen(config.express.port, () => {
        console.log('Listening on port ' + config.express.port);
    });
}

function addNote( req, res, next ) {
    var taskID = req.body.taskID;
    var newNote = {
        date: r.now(),
        message: req.body.message
    };

    r.table('Tasks').get(taskID).update({ 
        notes: r.row("notes").default([]).append(newNote)
    }).run(req.app._rdbConn, (err, cursor) => {
        if (err){
            return next(err);
        }

        res.json({success:true});
    });
}

function assignTask(req, res, next) {
    var taskID = req.body.taskID;
    var teamMember = req.body.teamMember;

    r.table('Tasks').get(taskID).update({ StatusTask:'Assigned', Assigned: teamMember}).run(req.app._rdbConn, (err, cursor) => {
        if (err){
            return next(err);
        }
    });

    r.table('Team').get('7c062a40-57aa-447c-937d-ab5bdf755d78').update({
        members: r.row('members').map(function(member){
            return r.branch(
            member('name').eq(teamMember),
            member.merge({status: 'ongoing'}),
            member
            )
        })
    }).run(req.app._rdbConn, (err, cursor) => {
        if (err){
            return next(err);
        }
    });
    res.json({success:true});
}

/**
 * Get tasks
 * @todo - bake this into a sepparate module 
 */
function getTasks(req, res, next) {
    r.table('Tasks').orderBy({index: 'id'}).pluck('id','Assigned','TargetedTeam','Sender','Deadline','StatusTask','ProjectID').limit(30).run(req.app._rdbConn, (err, cursor) => {
        if (err){
            return next(err);
        }

        cursor.toArray((err, result) => {
            if (err) {
                return next(err);
            }
            res.json(result);
        });
    });
}

function getTasksbyProjectID(req, res, next) {
    var projectID = req.params.projectid;
    r.table('Tasks').getAll(projectID, {index:'ProjectID'}).pluck('TargetedRole','ShortDescription','StatusTask','Assigned','notes','id').run(req.app._rdbConn, (err, cursor) => {
        if (err){
            return next(err);
        }

        cursor.toArray((err, result) => {
            if (err) {
                return next(err);
            }
            res.json(result);
        });
    });
}

/**
 * Get Team
 * @todo - bake this into a sepparate module 
 */
function getTeam(req, res, next) {
    r.table('Team').getAll('ASI NA SW Adhoc', {index:'name'}).run(req.app._rdbConn, (err, cursor) => {
        if (err){
            return next(err);
        }

        cursor.toArray((err, result) => {
            if (err) {
                return next(err);
            }
            res.json(result);
        });
    });
}

/**
 * Connect to rethinkdb, open socketIO connection and start express
 */
async.waterfall([
    function connectDB(callback) {
        r.connect(config.rethinkdb, callback);
    }

], function(err, connection) {
    if(err) {
        console.error(err);
        process.exit(1);
        return;
    }

    IO.SocketService(connection, socketIO, r);
    startExpress(connection);
});