import jwt from 'jsonwebtoken';
import auth from '../../config/auth';
import { promisify } from 'util';

export default async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(401).send({error: 'No token provided'});
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, auth.secret)

        request.user_id = decoded.user_id;

        return next();
    } catch (error) {
        return response.status(401).json({ error: 'token inválido' });
    };
};
