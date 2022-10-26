// import express from 'express';
// import debug from 'debug';
// //import bcrypt from 'bcryptjs'
// import constantsConfig from '../../../infrastructure/config/constants.config';
// import readUserUsecase from '../../../domain/usecases/user/read.user.usecase';
// import logger from '../../../infrastructure/logs/winston.logs';
// import multer from 'multer';
// import path from 'path';
// import userRepository from '../../repositories/user.repository';

// const log: debug.IDebugger = debug('app:users-middleware');

// class UsersMiddlerare{

//     async validateUserExists(req: express.Request, res: express.Response, next: express.NextFunction){
//         const users = await readUserUsecase.execute({
//             iduser: Number(req.params.iduser)
//         });
//         if(users){
//             logger.info([' Usuário encontrado: ', users])
//             next();
//         } else{
//             logger.error(`Usuário ${req.params.iduser} não existe`)
//             res.status(400).send('usuario ja existe')
//         }
//     }

//     async validateUserRepeated(req: express.Request, res: express.Response, next: express.NextFunction){
//         const users = await readUserUsecase.execute({
//             iduser: Number(req.params.iduser)
//         });
//         if(users) {
//             logger.info(['usuario encontrado: ', users]);
//             next();
//         } else{
//             res.status(400).send('usuario repetido')
//         }
//     }

// }

// export default new UsersMiddlerare();