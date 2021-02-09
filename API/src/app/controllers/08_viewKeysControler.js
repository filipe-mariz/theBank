import Evaluation from '../models/evaluationModel';
import Keys from '../models/keysModel';

/**
 * Recebe uma função index que lê do banco de dados as avaliações
 * e os comentários dos locais e retorna esses valores no formato 
 * json
 * 
 * @author Filipe Mariz
 */

 class ViewKeysControler {
    async index(request, response) { 
        const keys = await Keys.findAll({
            where: { keys : true },
            atributes: ['evaluation', 'comments'],
        })
        response.json(keys); 
    };
};

export default ViewKeysControler; 
