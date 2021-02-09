import Points from '../models/pointsModel';

/**
 * Está classe tem a funcionalidade de capturar dados da tabela 'points'
 * que contém o endereço do mapa com latitude e longitude e exibe para o 
 * usuário as informaçoes 
 * 
 * @author Filipe Mariz
 */

class ViewPointsControler{
    async index(request, response) {
        const points = await Points.findAll({
            where: { points: true },
        });
        return response.json(points);
    };
}; 

export default ViewPointsControler; 
