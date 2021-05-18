module.exports = (sequelizeConfig, Sequelize) => {
    // Set Model
    const Tutorial = sequelizeConfig.define(
        'tutorial',
        {
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            published: {
                type: Sequelize.BOOLEAN
            }
        }
    );

    return Tutorial;
};
