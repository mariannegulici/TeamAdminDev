var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var compression = require('compression');

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import config from './server/server-config';
import GraphQlSchema from './server/graphql-schema';
import { GraphqlConnector, TeamInfo, TimingInfo, DiaryInfo } from './server/graphql-connector';


/**
 * Add gZip compression for served files
 */
app.use(compression());

/**
 * Serve index file from /dist folder for frontend assets
 */
app.use(
    express.static(path.join(__dirname, 'dist'))
);

/**
 * Add the Express GraphQl Server and set the API endpoint
 */
app.use('/graphql',
    bodyParser.json(),
    graphqlExpress((request) => {
        // Get each request sent through the Graphql server
        const query = request.query.query || request.body.query;
        if (query && query.length > 2000) {
            // None of our app's queries are this long
            // Probably indicates someone trying to send an overly expensive query
            throw new Error('Query too large.');
        }

        // Initialize a new Graphql connector
        // The connector is used to get a new DataLoader instance for every incoming request
        // It uses the Graphql @context parameter to pass the new instance of DataLoader to the Graphql resolvers
        const graphqlConnector = new GraphqlConnector();

        return {
            schema: GraphQlSchema,
            context: {
                projectTeam: new TeamInfo(graphqlConnector),
                projectTiming: new TimingInfo(graphqlConnector),
                projectDiary: new DiaryInfo(graphqlConnector),
            },
        };
}));

/**
 * Add the GraphiQl query interface endpoint
 */
app.use('/graphiql',
    graphiqlExpress({endpointURL: '/graphql'})
);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/dist/index.html'));
});

/**
 * Start the Express server
 */
server.listen(config.express.port, () => {
    console.log('Listening on port ' + config.express.port);
});