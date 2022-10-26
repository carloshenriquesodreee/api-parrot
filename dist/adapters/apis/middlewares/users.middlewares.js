"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMubWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYWRhcHRlcnMvYXBpcy9taWRkbGV3YXJlcy91c2Vycy5taWRkbGV3YXJlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUNBQWlDO0FBQ2pDLDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBQ2pGLGlGQUFpRjtBQUNqRixrRUFBa0U7QUFDbEUsK0JBQStCO0FBQy9CLDJCQUEyQjtBQUMzQixtRUFBbUU7QUFFbkUsOERBQThEO0FBRTlELHlCQUF5QjtBQUV6Qix5R0FBeUc7QUFDekcsd0RBQXdEO0FBQ3hELGdEQUFnRDtBQUNoRCxjQUFjO0FBQ2QscUJBQXFCO0FBQ3JCLDREQUE0RDtBQUM1RCxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLHNFQUFzRTtBQUN0RSx3REFBd0Q7QUFDeEQsWUFBWTtBQUNaLFFBQVE7QUFFUiwyR0FBMkc7QUFDM0csd0RBQXdEO0FBQ3hELGdEQUFnRDtBQUNoRCxjQUFjO0FBQ2Qsc0JBQXNCO0FBQ3RCLDREQUE0RDtBQUM1RCxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLHVEQUF1RDtBQUN2RCxZQUFZO0FBQ1osUUFBUTtBQUVSLElBQUk7QUFFSix3Q0FBd0MifQ==