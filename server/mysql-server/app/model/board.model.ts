module.exports = (sequelizeConfig, Sequelize) => {
    // Set Board Model
    const Board = sequelizeConfig.define(
        'board',
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

    return Board;
};
