"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvcG9zdC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxpQ0FBaUM7QUFDakMsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixpRkFBaUY7QUFDakYsaUZBQWlGO0FBQ2pGLGtFQUFrRTtBQUNsRSwrQkFBK0I7QUFDL0IsMkJBQTJCO0FBRTNCLDhEQUE4RDtBQUU5RCx3QkFBd0I7QUFDeEIscUhBQXFIO0FBQ3JILDBEQUEwRDtBQUMxRCxzQkFBc0I7QUFDdEIsa0JBQWtCO0FBQ2xCLG9EQUFvRDtBQUNwRCxZQUFZO0FBQ1osUUFBUTtBQUVSLHlHQUF5RztBQUN6Ryx3REFBd0Q7QUFDeEQsZ0RBQWdEO0FBQ2hELGNBQWM7QUFDZCxxQkFBcUI7QUFDckIseURBQXlEO0FBQ3pELHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsbUVBQW1FO0FBQ25FLHFEQUFxRDtBQUNyRCxZQUFZO0FBQ1osUUFBUTtBQUVSLDJHQUEyRztBQUMzRyxvREFBb0Q7QUFDcEQsd0RBQXdEO0FBQ3hELGlDQUFpQztBQUNqQyxjQUFjO0FBQ2Qsc0JBQXNCO0FBQ3RCLHNCQUFzQjtBQUN0QixrQkFBa0I7QUFDbEIsb0RBQW9EO0FBQ3BELFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSTtBQUVKLHVDQUF1QyJ9