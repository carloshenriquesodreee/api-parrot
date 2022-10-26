import  express  from "express";
import createPostUsecase from "../../../domain/usecases/post/create.post.usecase";
import deletePostUsecase from "../../../domain/usecases/post/delete.post.usecase";
import readPostUsecase from "../../../domain/usecases/post/read.post.usecase";
import listPostUsecase from "../../../domain/usecases/post/list.post.usecase";
import updatePostUsecase from "../../../domain/usecases/post/update.post.usecase";
import debug from "debug";
import bcrypt from 'bcrypt'

const log: debug.IDebugger = debug('app:post-controller');

class PostController {
    async listPost(req: express.Request, res: express.Response){
        const posts = await listPostUsecase.execute();
        res.status(200).send(posts);
    }
    async getPostById(req: express.Request, res: express.Response){
        const post = await readPostUsecase.execute({
            idpost: Number(req.params.idpost)
        });
        res.status(200).send(post);
    }
    async createPost(req: express.Request, res: express.Response) {
        const post = await createPostUsecase.execute(req.body);
        log(post);
        res.status(201).send(post);
    }
    async updatePost(req: express.Request, res: express.Response){
        const post = await updatePostUsecase.execute(req.body);
            res.status(200).send(post)
    }

    async removePost(req: express.Request, res: express.Response){
        const post = await deletePostUsecase.execute({
            idpost: Number(req.params.idpost),
        });
            res.status(204).send()
        
    }
    async createPostBulk(req: express.Request, res: express.Response) {
        let countUsers = 0;
        for(countUsers = 0; countUsers < req.body.fileData.length; countUsers++){
            await createPostUsecase.execute(req.body.fileData[countUsers]);
        }
        res.status(201).send({
            createdUsers: countUsers
        });
}}
export default new PostController();