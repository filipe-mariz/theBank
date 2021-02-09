import User from '../models/userModel';
/**
 * classe responsável por capturar dados do banco e retornar esses dados em 
 * formato json 
 * 
 * @author Filipe Mariz 
 */
class ViewUser { 
    async index(request, response) {
        const user = await User.findAll({
            where: { user: true },
            attributes: ['id', 'name']
        });

        return response.json(user); 
    };
};

export default ViewUser;
