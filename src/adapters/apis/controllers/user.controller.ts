import express from 'express';
import debug from 'debug'
import userModelsMyql from '../../../infrastructure/persistence/mysql/models/user.models.myql';
import listUserUsecase from '../../../domain/usecases/user/list.user.usecase';
import readUserUsecase from '../../../domain/usecases/user/read.user.usecase';
import createUsersUsecase from '../../../domain/usecases/user/create.users.usecase';
import updateUserUsecase from '../../../domain/usecases/user/update.user.usecase';
import deleteUserUsecase from '../../../domain/usecases/user/delete.user.usecase';
//import bcrypt from 'bcryptjs'
import constantsConfig from '../../../infrastructure/config/constants.config';

const log: debug.IDebugger = debug('app:users-controller');

class UsersController {
    async listUsers(req: express.Request, res: express.Response){
        const users = await listUserUsecase.execute();
        res.status(200).send(users);
};

    async getUsersById(req: express.Request, res: express.Response){
        const users = await readUserUsecase.execute({
            iduser: Number(req.params.iduser)
        });
        res.status(200).send(users);

    };

    async createUser(req: express.Request, res: express.Response){
            const users = await createUsersUsecase.execute(req.body);
            log(users);
            res.status(201).send(users);
    }

    async updateUsers(req: express.Request, res: express.Response){
        const user = await updateUserUsecase.execute(req.body);
        res.status(200).send(user)
    }

    async removeUsers(req: express.Request, res: express.Response){
        const user = await deleteUserUsecase.execute({
            iduser: Number(req.params.iduser)
        });
        res.status(204).send();
    }
    async createUserBulk(req: express.Request, res: express.Response) {
        let countUsers = 0;
        for(countUsers = 0; countUsers < req.body.fileData.length; countUsers++){
            await createUsersUsecase.execute(req.body.fileData[countUsers]);
        }
        res.status(201).send({
            createdUsers: countUsers
        });
    }
}

export default new UsersController();