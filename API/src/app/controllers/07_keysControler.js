import Keys from '../models/keysModel';

/**
 * Nesta classe há uma requisição do tipo 'POST' onde o 
 * usuário pode cadastrar um novo local
 * 
 * @author Filipe Mariz
 */

class Keys{
    async create(request, response) {
        try {
            const keys = await Keys.create(request.body);
            return response.json(keys);

        } catch (error) {
            return response.status(400).send({
                error: 'Falha no registro do ponto'
            }); 
        };
    };
};
export default Keys;
