module.exports = {
    dialect: 'postgres', 
    host: 'localhost',
    username: 'postgres',
    password: 'dev', 
    database: 'db_api',
    define: {
        timestamps: true,
        underscored: true,
    },
};