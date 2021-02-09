import Evaluation from '../models/evaluationModel';

/**
 * Recebe uma função index que lê do banco de dados as avaliações
 * e os comentários dos locais e retorna esses valores no formato 
 * json
 * 
 * @author Filipe Mariz
 */

 class ViewEvaluationControler {
    async index(request, response) { 
        const evaluation = await Evaluation.findAll({
            where: {evaluation : true },
            atributes: ['evaluation', 'comments'],
        })
        response.json(evaluation); 
    };
};

export default ViewEvaluationControler; 
