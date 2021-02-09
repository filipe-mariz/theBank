import Sequelize, { Model } from 'sequelize';

class Points extends Model{
    static init(sequelize){
        super.init( 
            {
                uf: Sequelize.STRING,
                city: Sequelize.STRING,
                adress: Sequelize.STRING,
                lat: Sequelize.DECIMAL,
                lng: Sequelize.DECIMAL
            }, 
            {
                sequelize,
            }
        );
    };
};

export default Points;
