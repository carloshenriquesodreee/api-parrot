import express from "express";
import userController from "../controllers/user.controller";
// import { auth } from "../middlewares/auth.middleware";
//import usersMiddlewares from "../middlewares/users.middlewares";
import { CommonRoutesConfig } from "./common.routes.config";
import authMiddleware from "../middlewares/auth.middleware";

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application){
        super(app, 'UserRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/user`)
        .post(//usersMiddlewares.validateUserRepeated,
              userController.createUser) 

        this.app.route(`/users`)
        .get(userController.listUsers)

        this.app.route(`/users/:iduser`)
        .get( userController.getUsersById)
        .put( userController.updateUsers)
        .delete(userController.removeUsers);
        

        return this.app
    }
}