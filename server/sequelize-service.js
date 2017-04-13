import config from './server-config';
import Sequelize from 'sequelize';

export default new Sequelize( config.mssql.database,
                                config.mssql.username,
                                config.mssql.password,
                                {
                                    host: config.mssql.host,
                                    dialect: 'mssql',
                                    dialectOptions: {
                                        instanceName: config.mssql.instance
                                    }
                                }
                            );