import { MysqlDatabase } from "../../infrastructure/persistence/mysql/mysql.database";
import { IUserRepository } from "../../domain/repositories/user.repository.interface";
import * as Sequelize from "sequelize";
import modelToEntitysUserMysqlDatabase from "../../infrastructure/persistence/mysql/helpers/modelToEntitys.user.mysql.database";
import entitysToModelsUserMysqlDatabase from "../../infrastructure/persistence/mysql/helpers/entitysToModels.user.mysql.database";
// import bcrypt from "bcryptjs";
import { IUserEntity } from "../../domain/entities/user/user.entity";
import { logger } from "express-winston";
import { IDatabaseModel } from "../../infrastructure/persistence/databasemodel.interface";
import userModelsMyql from "../../infrastructure/persistence/mysql/models/user.models.myql";

export class UsersRepository implements IUserRepository {

    constructor(
        private _database: IDatabaseModel,
        private _ModelUsers: Sequelize.ModelCtor<Sequelize.Model<any, any>>
    ) {}

    async readById(reourceId: number): Promise<IUserEntity | undefined> {
            const userOne = await this._database.read(this._ModelUsers, reourceId);
            return modelToEntitysUserMysqlDatabase(userOne);
    }

    async create(resource: IUserEntity): Promise<IUserEntity> {
            const { users } = entitysToModelsUserMysqlDatabase(resource);
            const modelUser = await this._database.create(this._ModelUsers, users);
            resource.iduser = modelUser.null;
            return modelUser;  
    }

    async deleteById(resourceId: number): Promise<void> {
            await this._database.delete(this._ModelUsers, {idUser: resourceId});
    }

    async list(): Promise<IUserEntity[]> {
            const users = await this._database.list(this._ModelUsers);
            const userList = users.map(modelToEntitysUserMysqlDatabase);
            return userList;
        
    }

    async updateById(resource: IUserEntity): Promise<IUserEntity | undefined> {
            let modelUser = await this._database.read(this._ModelUsers, resource.iduser!);
            const { users } = entitysToModelsUserMysqlDatabase(resource);
            await this._database.update(modelUser, users);
            return resource;
    }
}
export default new UsersRepository(
    MysqlDatabase.getInstance(),
    userModelsMyql
)
