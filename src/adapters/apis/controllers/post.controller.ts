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
    async updatePosts(req: express.Request, res: express.Response){
        const posts = await updatePostUsecase.execute(req.body);
        try {
            res.status(200).send(posts)
        } catch (error) {
            res.status(404).send("erro ao atualizar o usuário.")
        }
    }

    async removePosts(req: express.Request, res: express.Response){
        try {
            await deletePostUsecase.execute({
                idpost: Number(req.params.idpost)
            });
            res.status(204).send();
        } catch (error) {
            res.status(404).send("erro ao deletar o usuário.")
        }
}}
export default new PostController();