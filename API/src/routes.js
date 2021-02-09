/**
 * Arquivo de rotas do projeto recebe instâncias das classes contidas na pasta 'controlers'
 * e instacia metodos das mesmas 
 * 
 * @author Filipe Mariz
 */
import express from 'express';

import UserControler from './app/controlers/01_userControler';
import ViewUser from './app/controlers/04_viewUser';
import EvaluationControler from './app/controlers/03_evaluationControler';
import ViewEvaluationControler from './app/controlers/06_viewEvaluationControler';
import PointsControler from './app/controlers/pointsControler';
import ViewPointsControler from './app/controlers/05_viewPointsControler';
import Keys from './app/controlers/08_viewKeysControler';
import SessionControler from './app/controlers/SessionControler';
import authMiddlware from './app/midlwere/authMiddlware';


const routes = express.Router();

const userControler = new UserControler();
const viewUser = new ViewUser();
const evaluationControler = new EvaluationControler();
const viewEvaluationControler = new ViewEvaluationControler();
const pointsControler = new PointsControler();
const viewPointsControler = new ViewPointsControler();
const sessionControler = new SessionControler();
const keys = new Keys();

routes.post('/users', userControler.create);                //criação de novo usuário 
routes.post('/sessions', sessionControler.store);           //autenticação de usuário

routes.use(authMiddlware);                                  //token

routes.post('/evaluation', evaluationControler.create);     //Criação de comentário e avaliação 
routes.post('/pointscontroler', pointsControler.create);    //Criar um novo ponto 
routes.put('/users', userControler.update);
routes.get('/viewuser', viewUser.index);                    //Visualizar um usuário 
routes.get('/points', viewPointsControler.index);           //visualizar um ponto 
routes.get('/viewEvaluation', viewEvaluationControler.index);             //visualizar avaliações 
routes.get('/keys', keys.index);

export default routes;
