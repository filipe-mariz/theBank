import User from '../models/userModel'; 

/**
 * Nesta classe há uma requisição do tipo 'POST' onde é
 * possivel cadastrar um novo usuário 
 * 
 * nela também é possivel atualizar dados cadastrais do usuário 
 * @author Filipe Mariz
 */
 
class UserControler {
    async create(request, response)  {
        try {
            const userExists = await User.findOne({ where: { email: request.body.email } });
            if(userExists){
                return response.status(400).json({ error: 'Usuário já existente' });
            }

            const user = await User.create(request.body);
            return response.json(user);
            
        } catch (error) {
            return response.status(400).send({
                error: 'Registration failed'
            });
        };        
    };
    
    async update(request, response) {
        const { email, oldPassword } = request.body;

        const user = await User.findByPk(req.user_id);
        if(email != user.email){
            const userExists = await User.findOne({ where: { email } });
           
            if(userExists) {
                return response.status(400).json({ error: 'Usuário já exixtente' });
            };
        };

        if(oldPassword && !(await user.checkPassword(oldPassword))) {
            return response.status(400).json({ error: 'Senha incorreta' });
        };

        const { id, name, email } = await user.update(request.body);

        return response.json({ 
            id, 
            name, 
            email,    
        });
    };    
};

export default UserControler;
