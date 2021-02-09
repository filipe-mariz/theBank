const { Sequelize } = require("sequelize");
const { QueryInterface } = require("sequelize/types");

module.exports = {
    up: ( queryInterface, Sequelize ) => {
        return queryInterface.createTable('EvaluationForPoint', {
            keys_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            evaluation_id: {
                type: Sequelize.INTEGER,
                references: { model: 'evaluation', key: 'evaluation_id' },
                onDelete: 'CASCADE',
                allowNull: false,
            },

            points_id: {
                type: Sequelize.INTEGER,
                references: { model: 'points', key: 'user_id' },
                onDelete: 'CASCADE',
                allowNull: false,
            }            
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('EvaluationForPoint');
    }
};
