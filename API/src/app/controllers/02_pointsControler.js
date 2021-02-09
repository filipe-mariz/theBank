import Points from '../models/pointsModel'; 

/**
 * Nesta classe há uma requisição do tipo 'POST' onde o 
 * usuário pode cadastrar um novo local
 * 
 * @author Filipe Mariz
 */

class PointsControler{
    async create(request, response) {
        try {
            const points = await Points.create(request.body);
            return response.json(points);

        } catch (error) {
            return response.status(400).send({
                error: 'Falha no registro do ponto'
            }); 
        };
    };
};    

export default PointsControler;
