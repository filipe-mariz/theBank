import Evaluation from '../models/evaluationModel';

/** 
 * Nesta classe temos uma requisisão do tipo 'POST' 
 * que salva no banco de dados a avaliação de um determinado 
 * local e um comentário
 * 
 * @author Filipe Ferreira 
 */

 class EvaluationControler{
    async create(request, response) { 
        
        try {
            const evaluation = await Evaluation.create(request.body);
            return response.json(evaluation);

        } catch (error) {
            return response.status(400).send({
                error: 'Falha no registro do ponto'
            });            
        };
    };
};

export default EvaluationControler;
