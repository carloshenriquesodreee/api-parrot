// import express from 'express';
// import debug from 'debug';
// import bcrypt from 'bcrypt'
// import constantsConfig from '../../../infrastructure/config/constants.config';
// import readPostUsecase from '../../../domain/usecases/post/read.post.usecase';
// import logger from '../../../infrastructure/logs/winston.logs';
// import multer from 'multer';
// import path from 'path';

// const log: debug.IDebugger = debug('app:users-middleware');

// class PostMiddleware{
//     async validateRequiredPostBodyFields(req: express.Request, res: express.Response, next: express.NextFunction){
//         if( req.body && req.body.iduser !== undefined){
//             next();
//         } else{
//             res.status(400).send('post ja feito')
//         }
//     }

//     async validatePostExists(req: express.Request, res: express.Response, next: express.NextFunction){
//         const posts = await readPostUsecase.execute({
//             idpost: Number(req.params.idpost)
//         });
//         if(posts){
//             logger.info([' post encontrado: ', posts])
//             next();
//         } else{
//             logger.error(`Post ${req.params.idpost} não existe`)
//             res.status(400).send('post ja existe')
//         }
//     }

//     async validatePostRepeated(req: express.Request, res: express.Response, next: express.NextFunction){
//         let resourceId: number = req.body.idpost;
//         const posts = await readPostUsecase.execute({
//             idpost: resourceId
//         });
//         if(!posts){
//             next();
//         } else{
//             res.status(400).send('post repetido')
//         }
//     }
// }

// export default new PostMiddleware();