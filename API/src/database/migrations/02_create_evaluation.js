const { Sequelize } = require("sequelize");
const { QueryInterface } = require("sequelize/types");

module.exports = {
    up: ( queryInterface, Sequelize ) => {
        return queryInterface.createTable('Evaluation', {
            evaluation_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },

            evaluation: {
                type: Sequelize.STRING, 
                allowNull: false,
            },

            comments: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            
            lat: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            },
    
            lng: {
                type: Sequelize.DECIMAL,
                allowNull: false,
            }
        });
    },

    down: queryInterface => {
        return queryInterface.dropTable('Evaluation');
    }
};
