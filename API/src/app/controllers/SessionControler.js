import User from '../models/userModel';
import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

/**
 * Autenticação de usuário
 * 
 * @author Filipe Mariz 
 */
 
class SessionControler {
    async store(request, response){
        const { email, password } = request.body

        const user = await User.findOne ({ where: { email } });
        if(!user){
            return response.status(401).json({ error: 'user not found' });
        }
        if(!(await user.checkPassword(password))){
            return response.status(401).json({ error: 'Senha incorreta' });
        }

        const { id,  name } = user;
        return response.json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn 
            })
        }) 
            
    }
}

export default new SessionControler();
