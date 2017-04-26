import * as Models from './sequelize-models';
import DataLoader from 'dataloader';
import extractQueryColumns from './server-utilities';

/**
 * Used as a DataLoader instance wrapper
 * 
 * @class GraphqlConnector
 */
export class GraphqlConnector {

    /**
     * Used to store the Graphql @info parameter passed to each resolver
     * Usefull for querying only the requested columns
     */
    resolverGraphqlInfo = null;

    /**
     * Creates an instance of GraphqlConnector and a new instance of DataLoader
     */
    constructor() {
        this.projectsLoader = new DataLoader(
                // binds the @keys loaded into DataLoader to the resolveQuery function
                this.resolveQuery.bind(this)
            );
    }

    /**
     * Resolver for the DataLoader instance
     * 
     * @param {any} keys -> all keys loaded into DataLoader
     * @returns -> a Promise with the requested batched data
     */
    resolveQuery(keys) {
        return Promise.resolve(this.batchGetTeamInfo(keys));
    }

    /**
     * Function that queries the SQl database for requested data
     * 
     * @param {any} projectIDs -> all keys loaded into DataLoader and passed through the Dataloader resolver
     * @returns -> a Promise with the fetched batched data
     */
    batchGetTeamInfo(projectIDs) {
        return new Promise( (resolve,reject) => {
            Models.ProjectTeam.findAll({attributes: extractQueryColumns(this.resolverGraphqlInfo), where: {ProjectID: projectIDs}, raw: true})
                .then(result => {
                    console.log(Date.now());
                    resolve(result);
                });
            }
        );
    }

    /**
     * Used for loading individual data into Dataloader
     * 
     * @param {any} key -> key loaded into Dataloader
     * @param {any} resolverInfo -> Graphql @info parameter passed to each resolver
     * @returns -> coalesced data received from DataLoader Promise
     */
    loadKey(key, resolverInfo) {
        if (this.resolverGraphqlInfo == null) this.resolverGraphqlInfo = resolverInfo;
        return this.projectsLoader.load(key);
    }
}

/**
 * Middleware class that bridges the @GraphqlConnector class and the Graphql resolvers
 * 
 * @class TeamInfo
 */
export class TeamInfo {
    /**
     * Creates an instance of TeamInfo.
     * 
     * @param {any} connector -> instance of @GraphqlConnector class
     */
    constructor(connector) {
        this.connector = connector;
    }

    /**
     * Passes the projectIDs to the DataLoader through the @loadKey function in the GraphqlConnector instance
     * 
     * @param {any} projectID -> the projectID
     * @param {any} resolverInfo -> Graphql @info parameter passed to each resolver
     * @returns -> coalesced data received from GraphqlConnector @loadKey function
     */
    getTeamInfo(projectID, resolverInfo) {
        return this.connector.loadKey(projectID, resolverInfo);
    }
}