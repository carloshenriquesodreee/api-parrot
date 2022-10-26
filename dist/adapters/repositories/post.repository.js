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
const modelToEntitys_post_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/modelToEntitys.post.mysql.database"));
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
            const { posts } = (0, entitysToModels_post_mysql_database_1.default)(resource);
            const modelUsers = yield this._database.create(this._modelPost, posts);
            resource.idpost = modelUsers.idpost;
            return resource;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._modelPost, { idpost: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield this._database.list(this._modelPost);
            const clients = posts.map(modelToEntitys_post_mysql_database_1.default);
            return clients;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let postsModel = yield this._database.read(this._modelPost, resource.idpost);
            const { posts } = (0, entitysToModels_post_mysql_database_1.default)(resource);
            yield this._database.update(postsModel, posts);
            return resource;
        });
    }
}
exports.PostRepository = PostRepository;
exports.default = new PostRepository(mysql_database_1.MysqlDatabase.getInstance(), post_models_mysql_1.default, user_models_myql_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy9wb3N0LnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsMEZBQXNGO0FBR3RGLHNIQUE0RjtBQUM1Rix3SEFBOEY7QUFDOUYsNkpBQWtJO0FBQ2xJLDJKQUFnSTtBQUNoSSxtQ0FBbUM7QUFDbkMsc0NBQXNDO0FBRXJDLE1BQWEsY0FBYztJQUN4QixxRkFBcUY7SUFDckYsZ0RBQWdEO0lBQ2hELElBQUk7SUFDSixZQUNZLFNBQXdCLEVBQ3hCLFVBQTBELEVBQzFELFVBQTBEO1FBRjFELGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDeEIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0Q7UUFDMUQsZUFBVSxHQUFWLFVBQVUsQ0FBZ0Q7UUFJOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQyxVQUFVLEVBQUUsUUFBUTtZQUNwQixFQUFFLEVBQUUsTUFBTTtTQUNiLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFQyxRQUFRLENBQUMsVUFBa0I7O1lBQzdCLElBQUk7Z0JBQ0EsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUNyRSxPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sR0FBRyxFQUFFO2dCQUNSLE1BQU0sSUFBSSxLQUFLLENBQUUsR0FBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFFBQXFCOztZQUM5QixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBQSw2Q0FBZ0MsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCxNQUFNLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkUsUUFBUSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1lBQ3BDLE9BQU8sUUFBUSxDQUFBO1FBQ25CLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxVQUFrQjs7WUFDL0IsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxDQUFDLENBQUE7UUFDckUsQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixNQUFNLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQTtZQUN4RCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLDRDQUErQixDQUFDLENBQUE7WUFDMUQsT0FBTyxPQUFPLENBQUM7UUFDbkIsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLFFBQXFCOztZQUNsQyxJQUFJLFVBQVUsR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLE1BQU8sQ0FBQyxDQUFDO1lBQzlFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFBLDZDQUFnQyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzdELE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQy9DLE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtDQUNBO0FBbERKLHdDQWtESTtBQUVELGtCQUFlLElBQUksY0FBYyxDQUM3Qiw4QkFBYSxDQUFDLFdBQVcsRUFBRSxFQUMzQiwyQkFBZSxFQUNmLDBCQUFjLENBQ2pCLENBQUEifQ==