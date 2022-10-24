import { CommonRoutesConfig } from "./common.routes.config";
import postController from "../controllers/post.controller";
import postMiddleware from "../middlewares/post.middleware";
import express from "express";

export class PostRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PostRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/Post`)
            .get(postController.listPost)
            .post(
                postMiddleware.validateRequiredPostBodyFields,
                postMiddleware.validatePostRepeated,
                postController.createPost
            );

            this.app.route(`/post/:postid`)
                        .all(postMiddleware.validatePostExists)
                        .get(postController.getPostById)
                        .put(
                            postMiddleware.validateRequiredPostBodyFields,
                            postController.updatePosts
                        )
                        .delete(postController.removePosts);

        return this.app;
    }
}