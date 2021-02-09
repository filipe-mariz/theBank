import  Sequelize  from 'sequelize';
import { QueryInterface } from 'sequelize/types';
 
export function up(queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
        user_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },

        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },

        password_hash: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
}
export function down(queryInterface) {
    return queryInterface.dropTable('User');
}