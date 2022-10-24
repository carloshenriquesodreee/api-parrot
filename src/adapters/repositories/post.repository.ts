import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import { IPostEntity } from "../../domain/entities/post/post.entity";
import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IPostRepository } from "../../domain/repositories/post.repository.interface";
import * as Sequelize from "sequelize"
import userModelsMyql from "../../infrastructure/persistence/mysql/models/user.models.myql";
import postModelsMysql from "../../infrastructure/persistence/mysql/models/post.models.mysql";
import entitysToModels from "../../infrastructure/persistence/mysql/helpers/entitysToModels.post.mysql.database";
import modelToEntitys from "../../infrastructure/persistence/mysql/helpers/modelToEntitys.post.mysql.database";
// import * as bcrypt from "bcrypt"
// import * as jwt from "jsonwebtoken"

export class PostRepository implements IPostRepository{
    // static findOneBy(arg0: { decoded: string | import("jsonwebtoken").JwtPayload; }) {
    //   throw new Error('Method not implemented.');
    // }
    constructor(
        private _database: MysqlDatabase,
        private _modelPost: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        private _modelUser: Sequelize.ModelCtor<Sequelize.Model<any, any>>,
        ){
            this._modelPost.hasOne(this._modelUser, {
                foreignKey: 'iduser',
                as: 'user'
            });
        }
    async deleteById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelPost, {idpost: resourceId});
        throw new Error("Method not implemented.");
    }
        
    async readById(resourceId: number): Promise<IPostEntity | undefined> {
        try {
            const conta = await this._database.read(this._modelPost, resourceId);
            return conta;
        }
        catch (err) {
            throw new Error((err as Error).message);
        }
    }
    
    async create(resource: IPostEntity): Promise<IPostEntity> {
        const posts = entitysToModels(resource);
        const modelUsers = await this._database.create(this._modelPost, posts);
        resource.idpost = modelUsers;
        return resource
    }

    async deletedById(resourceId: number): Promise<void> {
        await this._database.delete(this._modelPost, {idpost:resourceId})
    }

    async list(): Promise<IPostEntity[]> {
        const posts = await this._database.list(this._modelPost)
        const clients = posts.map(entitysToModels)
        return clients;
    }

    async updateById(resource: IPostEntity): Promise<IPostEntity | undefined> {
        let postsModel = await this._database.read(this._modelPost, resource.idpost!);
        const posts = entitysToModels(resource);
        await this._database.update(postsModel, posts);
        return resource;
    }
    }

    export default new PostRepository(
        MysqlDatabase.getInstance(),
        userModelsMyql,
        postModelsMysql
    )