'use strict';

var _graphqlServerExpress = require('graphql-server-express');

var _serverConfig = require('./server/server-config');

var _serverConfig2 = _interopRequireDefault(_serverConfig);

var _graphqlSchema = require('./server/graphql-schema');

var _graphqlSchema2 = _interopRequireDefault(_graphqlSchema);

var _graphqlConnector = require('./server/graphql-connector');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var compression = require('compression');

/**
 * Add gZip compression for served files
 */
app.use(compression());

/**
 * Serve index file from /dist folder for frontend assets
 */
app.use(express.static(path.join(__dirname, 'dist')));

/**
 * Add the Express GraphQl Server and set the API endpoint
 */
app.use('/graphql', bodyParser.json(), (0, _graphqlServerExpress.graphqlExpress)(function (request) {
    // Get each request sent through the Graphql server
    var query = request.query.query || request.body.query;
    if (query && query.length > 2000) {
        // None of our app's queries are this long
        // Probably indicates someone trying to send an overly expensive query
        throw new Error('Query too large.');
    }

    // Initialize a new Graphql connector
    // The connector is used to get a new DataLoader instance for every incoming request
    // It uses the Graphql @context parameter to pass the new instance of DataLoader to the Graphql resolvers
    var graphqlConnector = new _graphqlConnector.GraphqlConnector();

    return {
        schema: _graphqlSchema2.default,
        context: {
            projectTeam: new _graphqlConnector.TeamInfo(graphqlConnector)
        }
    };
}));

/**
 * Add the GraphiQl query interface endpoint
 */
app.use('/graphiql', (0, _graphqlServerExpress.graphiqlExpress)({ endpointURL: '/graphql' }));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

/**
 * Start the Express server
 */
server.listen(_serverConfig2.default.express.port, function () {
    console.log('Listening on port ' + _serverConfig2.default.express.port);
});
//# sourceMappingURL=server.js.map