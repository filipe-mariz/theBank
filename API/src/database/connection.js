import Sequelize from 'sequelize';
import databaseConfig from '../config/database'
import User from '../app/models/user';
import Evaluation from '../app/models/evaluation'
import Points from '../app/models/points'

const models = [
    User,
    Evaluation,
    Points
];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models.map(model => models.init(this.connection));
    }
}

export default new Database();