module.exports = (sequelizeConfig, Sequelize) => {
    // Set User Model
    const User = sequelizeConfig.define(
        'user',
        {
            username: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            }
        }
    );

    return User;
};
