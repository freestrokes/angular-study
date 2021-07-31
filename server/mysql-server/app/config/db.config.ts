module.exports = {
    host: 'localhost',
    username: 'root',
    password: '1234',
    db: 'testdb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
