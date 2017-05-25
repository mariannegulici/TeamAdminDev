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
    resolverGraphqlInfoTeam = null;
    resolverGraphqlInfoTiming = null;
    resolverGraphqlInfoDiary = null;
    // 1 - project Team
    // 2 - project Timing
    // 3 - project Timing
    resolverIdentifier = null;

    /**
     * Creates an instance of GraphqlConnector and a new instance of DataLoader
     */
    constructor() {
        this.projectTeamLoader = new DataLoader(
                // binds the @keys loaded into DataLoader to the resolveQuery function
                this.resolveTeamQuery.bind(this)
            );
        this.projectsTimingLoader = new DataLoader(
                // binds the @keys loaded into DataLoader to the resolveQuery function
                this.resolveTimingQuery.bind(this)
            );
        this.projectsDiaryLoader = new DataLoader(
                // binds the @keys loaded into DataLoader to the resolveQuery function
                this.resolveDiaryQuery.bind(this)
            );
    }

    /**
     * Resolver for the Team DataLoader instance
     * 
     * @param {any} keys -> all keys loaded into DataLoader
     * @returns -> a Promise with the requested batched data
     */
    resolveTeamQuery(keys) {
        return Promise.resolve(this.batchGetTeamInfo(keys));
    }

    /**
     * Resolver for the Timing DataLoader instance
     * 
     * @param {any} keys -> all keys loaded into DataLoader
     * @returns -> a Promise with the requested batched data
     */
    resolveTimingQuery(keys) {
        return Promise.resolve(this.batchGetTimingInfo(keys));
    }

    /**
     * Resolver for the Diary DataLoader instance
     * 
     * @param {any} keys -> all keys loaded into DataLoader
     * @returns -> a Promise with the requested batched data
     */
    resolveDiaryQuery(keys) {
        return Promise.resolve(this.batchGetDiaryInfo(keys));
    }

    /**
     * Function that queries the SQl database for requested Team data
     * 
     * @param {any} projectIDs -> all keys loaded into DataLoader and passed through the Dataloader resolver
     * @returns -> a Promise with the fetched batched data
     */
    batchGetTeamInfo(projectIDs) {
        return new Promise( (resolve,reject) => {
            Models.ProjectTeam.findAll({attributes: extractQueryColumns(this.resolverGraphqlInfoTeam), where: {ProjectID: projectIDs}, raw: true})
                .then(result => {
                    console.log(Date.now());
                    resolve(result);
                });
            }
        );
    }

    /**
     * Function that queries the SQl database for requested Timing data
     * 
     * @param {any} projectIDs -> all keys loaded into DataLoader and passed through the Dataloader resolver
     * @returns -> a Promise with the fetched batched data
     */
    batchGetTimingInfo(projectIDs) {
        return new Promise( (resolve,reject) => {
            Models.ProjectTiming.findAll({attributes: extractQueryColumns(this.resolverGraphqlInfoTiming), where: {ProjectID: projectIDs}, raw: true})
                .then(result => {
                    console.log(Date.now());
                    resolve(result);
                });
            }
        );
    }

    /**
     * Function that queries the SQl database for requested Timing data
     * 
     * @param {any} projectIDs -> all keys loaded into DataLoader and passed through the Dataloader resolver
     * @returns -> a Promise with the fetched batched data
     */
    batchGetDiaryInfo(projectIDs) {
        return new Promise( (resolve,reject) => {
            Models.ProjectDiary.findAll({attributes: extractQueryColumns(this.resolverGraphqlInfoDiary), where: {ProjectID: projectIDs}, raw: true})
                .then(result => {
                    if (projectIDs.length != result.length) {
                        let mapNewObject = [];
                        projectIDs.map(id => {
                            let index = result.findIndex(row => row.ProjectID === id);
                            if ( index != -1 )
                                mapNewObject.push(result[index]);
                            else
                                mapNewObject.push(null);
                        });
                        resolve(mapNewObject);
                    } else
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
    loadKey(key, resolverInfo, resolverIndetifier) {
        if (resolverIndetifier == 1) {
            if (this.resolverGraphqlInfoTeam == null) this.resolverGraphqlInfoTeam = resolverInfo;
            return this.projectTeamLoader.load(key);
        }
            
        if (resolverIndetifier == 2) {
            if (this.resolverGraphqlInfoTiming == null) this.resolverGraphqlInfoTiming = resolverInfo;
            return this.projectsTimingLoader.load(key);
        }

        if (resolverIndetifier == 3) {
            if (this.resolverGraphqlInfoDiary == null) this.resolverGraphqlInfoDiary = resolverInfo;
            return this.projectsDiaryLoader.load(key);
        }
        
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
    getTeamInfo(projectID, resolverInfo, resolverIndetifier) {
        return this.connector.loadKey(projectID, resolverInfo, resolverIndetifier);
    }
}

/**
 * Middleware class that bridges the @GraphqlConnector class and the Graphql resolvers
 * 
 * @class TeamInfo
 */
export class TimingInfo {
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
    getTimingInfo(projectID, resolverInfo, resolverIndetifier) {
        return this.connector.loadKey(projectID, resolverInfo, resolverIndetifier);
    }
}

/**
 * Middleware class that bridges the @GraphqlConnector class and the Graphql resolvers
 * 
 * @class DiaryInfo
 */
export class DiaryInfo {
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
    getDiaryInfo(projectID, resolverInfo, resolverIndetifier) {
        return this.connector.loadKey(projectID, resolverInfo, resolverIndetifier);
    }
}