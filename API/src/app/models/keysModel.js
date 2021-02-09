import Sequelize, { Model } from 'sequelize';

class Keys extends Model{
    static init(sequelize){
        super.init(
            {
                evaluation_id: Sequelize.INTEGER,
                points_id: Sequelize.INTEGER
            }, 
            {
                sequelize,
            }
        );
    };
};

export default Keys;
