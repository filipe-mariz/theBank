import { Sequelize } from "sequelize";
import { QueryInterface } from "sequelize/types";

export function up(queryInterface, Sequelize) {
    return queryInterface.createTable('Points', {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        uf: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        city: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        adress: {
            type: Sequelize.STRING,
            allowNull: true
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
}
export function down(queryInterface) {
    return queryInterface.dropTable('Points');
}