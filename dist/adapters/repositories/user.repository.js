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
exports.UsersRepository = void 0;
const mysql_database_1 = require("../../infrastructure/persistence/mysql/mysql.database");
const modelToEntitys_user_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/modelToEntitys.user.mysql.database"));
const entitysToModels_user_mysql_database_1 = __importDefault(require("../../infrastructure/persistence/mysql/helpers/entitysToModels.user.mysql.database"));
const user_models_myql_1 = __importDefault(require("../../infrastructure/persistence/mysql/models/user.models.myql"));
class UsersRepository {
    constructor(_database, _ModelUsers) {
        this._database = _database;
        this._ModelUsers = _ModelUsers;
    }
    readById(reourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            const userOne = yield this._database.read(this._ModelUsers, reourceId);
            return (0, modelToEntitys_user_mysql_database_1.default)(userOne);
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const { users } = (0, entitysToModels_user_mysql_database_1.default)(resource);
            const modelUser = yield this._database.create(this._ModelUsers, users);
            resource.iduser = modelUser.null;
            return modelUser;
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this._database.delete(this._ModelUsers, { idUser: resourceId });
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this._database.list(this._ModelUsers);
            const userList = users.map(modelToEntitys_user_mysql_database_1.default);
            return userList;
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            let modelUser = yield this._database.read(this._ModelUsers, resource.iduser);
            const { users } = (0, entitysToModels_user_mysql_database_1.default)(resource);
            yield this._database.update(modelUser, users);
            return resource;
        });
    }
    readByWhere(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this._database.readByWhere(this._ModelUsers, {
                    email: email,
                    password: password
                });
                return (0, modelToEntitys_user_mysql_database_1.default)(users);
            }
            catch (err) {
                throw new Error(err.message);
            }
        });
    }
}
exports.UsersRepository = UsersRepository;
exports.default = new UsersRepository(mysql_database_1.MysqlDatabase.getInstance(), user_models_myql_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yZXBvc2l0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL3JlcG9zaXRvcmllcy91c2VyLnJlcG9zaXRvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEZBQXNGO0FBR3RGLDJKQUFnSTtBQUNoSSw2SkFBa0k7QUFLbEksc0hBQTRGO0FBRTVGLE1BQWEsZUFBZTtJQUV4QixZQUNZLFNBQXlCLEVBQ3pCLFdBQTJEO1FBRDNELGNBQVMsR0FBVCxTQUFTLENBQWdCO1FBQ3pCLGdCQUFXLEdBQVgsV0FBVyxDQUFnRDtJQUNwRSxDQUFDO0lBRUUsUUFBUSxDQUFDLFNBQWlCOztZQUN4QixNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkUsT0FBTyxJQUFBLDRDQUErQixFQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUFxQjs7WUFDMUIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUEsNkNBQWdDLEVBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0QsTUFBTSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZFLFFBQVEsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztZQUNqQyxPQUFPLFNBQVMsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsVUFBa0I7O1lBQzNCLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsQ0FBQyxDQUFDO1FBQzVFLENBQUM7S0FBQTtJQUVLLElBQUk7O1lBQ0YsTUFBTSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDMUQsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyw0Q0FBK0IsQ0FBQyxDQUFDO1lBQzVELE9BQU8sUUFBUSxDQUFDO1FBRXhCLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFxQjs7WUFDOUIsSUFBSSxTQUFTLEdBQUcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxNQUFPLENBQUMsQ0FBQztZQUM5RSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBQSw2Q0FBZ0MsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUM3RCxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5QyxPQUFPLFFBQVEsQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFDSyxXQUFXLENBQUMsS0FBYSxFQUFFLFFBQWdCOztZQUM3QyxJQUFHO2dCQUNDLE1BQU0sS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtvQkFDN0QsS0FBSyxFQUFFLEtBQUs7b0JBQ1osUUFBUSxFQUFFLFFBQVE7aUJBQ3JCLENBQUMsQ0FBQztnQkFFSCxPQUFPLElBQUEsNENBQStCLEVBQUMsS0FBSyxDQUFDLENBQUM7YUFDakQ7WUFBQyxPQUFNLEdBQUcsRUFBQztnQkFDUixNQUFNLElBQUksS0FBSyxDQUFFLEdBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQztRQUNMLENBQUM7S0FBQTtDQUNKO0FBaERELDBDQWdEQztBQUNELGtCQUFlLElBQUksZUFBZSxDQUM5Qiw4QkFBYSxDQUFDLFdBQVcsRUFBRSxFQUMzQiwwQkFBYyxDQUNqQixDQUFBIn0=