import Sequelize, { Model } from 'sequelize';

class Evaluation extends Model{
    static init(sequelize){
        super.init(
            {
                evaluation: Sequelize.STRING,
                comments: Sequelize.STRING, 
                lat: Sequelize.DECIMAL,
                lng: Sequelize.DECIMAL
            },
            {
                sequelize,
            }
        );
    };
};

export default Evaluation;
