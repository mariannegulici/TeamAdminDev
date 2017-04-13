var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var server = require('http').createServer(app);
var compression = require('compression');

import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import config from './server/server-config';
import GraphQlSchema from './server/graphql-schema';


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
    graphqlExpress({schema: GraphQlSchema}),
    graphiqlExpress({endpointURL: '/graphql'})
);

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