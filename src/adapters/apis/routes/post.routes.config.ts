import express from "express";
import postController from "../controllers/post.controller";
// import { auth } from "../middlewares/auth.middleware";
//import usersMiddlewares from "../middlewares/users.middlewares";
import { CommonRoutesConfig } from "./common.routes.config";

export class PostsRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'PostsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/post`)
        .post(//postMiddleware.validateRequiredPostBodyFields,
           // postMiddleware.validatePostRepeated,
            postController.createPost) 

        this.app.route(`/posts`)
        .get( postController.listPost)

        this.app.route(`/posts/:idpost`)
        //.all(postMiddleware.validatePostExists)
        .get(postController.getPostById)
        .put(postController.updatePost)
        .delete(postController.removePost);
        

        return this.app;
    }
}