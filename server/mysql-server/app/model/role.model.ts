module.exports = (sequelizeConfig, Sequelize) => {
    // Set Role Model
    const Role = sequelizeConfig.define(
        'role',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING
            }
        }
    );

    return Role;
};
