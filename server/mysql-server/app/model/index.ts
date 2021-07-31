const dbConfig = require('../config/db.config.ts');
// const dbConfig = require('../config/db.config.heroku.ts');
const Sequelize = require('sequelize');

const sequelizeConfig = new Sequelize(
    dbConfig.db,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
);

const db = {};
db.sequelize = Sequelize;
db.sequelizeConfig = sequelizeConfig;
db.role = require('./role.model.ts')(sequelizeConfig, Sequelize);
db.user = require('./user.model.ts')(sequelizeConfig, Sequelize);
db.board = require('./board.model.ts')(sequelizeConfig, Sequelize);

//TODO
// user_roles 모델을 이 부분에서 생성.
// roleId, userId를 각각 foreignKey, otherKey로 설정해줌.
// foreignKey -> source(through) 모델에서 참조하는 키
// otherKey -> target 모델에서 참조하는 키
// foreignKey는 through 모델 기준.
// otherKey는 belongsToMany()의 첫번쨰 파라미터로 받은 모델 기준.
db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});

db.ROLES = ["ADMIN", "USER"];

//TODO
db.tutorial = require('./model.ts')(sequelizeConfig, Sequelize);

module.exports = db;
