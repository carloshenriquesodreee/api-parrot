import express from 'express';
import debug from 'debug';
import loginAuthUsecase from '../../../domain/usecases/auth/login.auth.usecase';

const log: debug.IDebugger = debug('app:auth-controller');

class AuthController {
    async login(req: express.Request, res: express.Response){
        const users = await loginAuthUsecase.execute(req.body);
        if(users){
            res.status(200).send(users);
        } else {
            res.status(401).send({
                error: `Dados incorretos.`
            });
        }
        
    }
}

export default new AuthController();