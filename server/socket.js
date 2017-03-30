/**
 * Open server socket connection and make it available for import
 * 
 * @param {any} connection - Database open connection
 * @param {any} socketIO - SocketIO reference
 * @param {any} database - the database reference
 */
exports.SocketService = function(connection, socketIO, database) {
    socketIO.on('connection', function(socket){
        console.log('a user connected');
        
        getTasksChanges(connection, socket, database);
        getTeamChanges(connection, socket, database);
        
        socket.on('disconnect', function(){
            console.log('user disconnected');
        });
    });
}

/**
 * Get a stream for any Tasks changes from database
 * 
 * @param {any} dbConnection - the database connection
 * @param {any} theSocket - the socket reference from on.connection
 * @param {any} theDatabase - the database reference
 */
function getTasksChanges(dbConnection, theSocket, theDatabase) {
    theDatabase.table('Tasks').orderBy({index: 'id'}).pluck('id','Assigned','TargetedTeam','Sender','Deadline','StatusTask','ProjectID').limit(30).changes().run(dbConnection).then(function(cursor) {
        cursor.each(function(err, item){
            if (item && item.new_val)
                theSocket.emit('tasks', item.new_val);
        });
    });
}

/**
 * Get a stream for any Team Members changes from database
 * 
 * @param {any} dbConnection - the database connection
 * @param {any} theSocket - the socket reference from on.connection
 * @param {any} theDatabase - the database reference
 */
function getTeamChanges(dbConnection, theSocket, theDatabase) {
    theDatabase.table('Team').getAll('ASI NA SW Adhoc', {index:'name'}).changes().run(dbConnection).then(function(cursor) {
        cursor.each(function(err, item){
            if (item && item.new_val)
                theSocket.emit('team', item.new_val);
        });
    });
}