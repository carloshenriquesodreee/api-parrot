"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
const mysql_database_1 = require("../../infrastructure/persistence/mysql/mysql.database");
const user_models_myql_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/user.models.myql"));
const post_models_mysql_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/post.models.mysql"));
const entitysToModels_post_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/entitysToModels.post.mysql.database"));
// import * as bcrypt from "bcrypt"
// import * as jwt from "jsonwebtoken"
class PostRepository {
    // static findOneBy(arg0: { decoded: string | import("jsonwebtoken").JwtPayload; }) {
    //   throw new Error('Method not implemented.');
    // }
    constructor(_database, _modelPost, _modelUser) {
        this._database = _database;
        this._modelPost = _modelPost;
        this._modelUser = _modelUser;
        this._modelPost.hasOne(this._modelUser, {
            foreignKey: 'iduser',
            as: 'user'
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelPost, { idpost: resourceId });
            throw new Error("Method not implemented.");
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conta = yield this._database.read(this._modelPost, resourceId);
                return conta;
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = (0, entitysToModels_post_mysql_database_1.default)(resource);
            const modelUsers = yield this._database.create(this._modelPost, posts);
            resource.idpost = modelUsers;
            return resource;
        });
    }
    deletedById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelPost, { idpost: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this._database.list(this._modelPost);
            const clients = posts.map(entitysToModels_post_mysql_database_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let postsModel = yield this._database.read(this._modelPost, resource.idpost);
            const posts = (0, entitysToModels_post_mysql_database_1.default)(resource);
            yield this._database.update(postsModel, posts);
            return resource;
        });
    }
}
exports.PostRepository = PostRepository;
exports.default = new PostRepository(mysql_database_1.MysqlDatabase.getInstance(), user_models_myql_1.default, post_models_mysql_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy9wb3N0LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMEZBQXNGO0FBR3RGLHNIQUE0RjtBQUM1Rix3SEFBOEY7QUFDOUYsNkpBQWlIO0FBRWpILG1DQUFtQztBQUNuQyxzQ0FBc0M7QUFFdEMsTUFBYSxjQUFjO0lBQ3ZCLHFGQUFxRjtJQUNyRixnREFBZ0Q7SUFDaEQsSUFBSTtJQUNKLFlBQ1ksU0FBd0IsRUFDeEIsVUFBMEQsRUFDMUQsVUFBMEQ7UUFGMUQsY0FBUyxHQUFULFNBQVMsQ0FBZTtRQUN4QixlQUFVLEdBQVYsVUFBVSxDQUFnRDtRQUMxRCxlQUFVLEdBQVYsVUFBVSxDQUFnRDtRQUU5RCxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BDLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLEVBQUUsRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNDLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxDQUFDLENBQUM7WUFDbkUsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQy9DLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxVQUFrQjs7WUFDN0IsSUFBSTtnQkFDQSxNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3JFLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsT0FBTyxHQUFHLEVBQUU7Z0JBQ1IsTUFBTSxJQUFJLEtBQUssQ0FBRSxHQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDM0M7UUFDTCxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBcUI7O1lBQzlCLE1BQU0sS0FBSyxHQUFHLElBQUEsNkNBQWUsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkUsUUFBUSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7WUFDN0IsT0FBTyxRQUFRLENBQUE7UUFDbkIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLFVBQWtCOztZQUNoQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQTtRQUNyRSxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3hELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsNkNBQWUsQ0FBQyxDQUFBO1lBQzFDLE9BQU8sT0FBTyxDQUFDO1FBQ25CLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFxQjs7WUFDbEMsSUFBSSxVQUFVLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxNQUFPLENBQUMsQ0FBQztZQUM5RSxNQUFNLEtBQUssR0FBRyxJQUFBLDZDQUFlLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEMsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0MsT0FBTyxRQUFRLENBQUM7UUFDcEIsQ0FBQztLQUFBO0NBQ0E7QUFwREwsd0NBb0RLO0FBRUQsa0JBQWUsSUFBSSxjQUFjLENBQzdCLDhCQUFhLENBQUMsV0FBVyxFQUFFLEVBQzNCLDBCQUFjLEVBQ2QsMkJBQWUsQ0FDbEIsQ0FBQSJ9