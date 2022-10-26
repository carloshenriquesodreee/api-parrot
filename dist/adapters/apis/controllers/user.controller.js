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
const debug_1 = __importDefault(require("debug"));
const list_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/list.user.usecase"));
const read_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/read.user.usecase"));
const create_users_usecase_1 = __importDefault(require("../../../domain/usecases/user/create.users.usecase"));
const update_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/update.user.usecase"));
const delete_user_usecase_1 = __importDefault(require("../../../domain/usecases/user/delete.user.usecase"));
const log = (0, debug_1.default)('app:users-controller');
class UsersController {
    listUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield list_user_usecase_1.default.execute();
            res.status(200).send(users);
        });
    }
    ;
    getUsersById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield read_user_usecase_1.default.execute({
                iduser: Number(req.params.iduser)
            });
            res.status(200).send(users);
        });
    }
    ;
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield create_users_usecase_1.default.execute(req.body);
            log(users);
            res.status(201).send(users);
        });
    }
    updateUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield update_user_usecase_1.default.execute(req.body);
            res.status(200).send(user);
        });
    }
    removeUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield delete_user_usecase_1.default.execute({
                iduser: Number(req.params.iduser)
            });
            res.status(204).send();
        });
    }
    createUserBulk(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let countUsers = 0;
            for (countUsers = 0; countUsers < req.body.fileData.length; countUsers++) {
                yield create_users_usecase_1.default.execute(req.body.fileData[countUsers]);
            }
            res.status(201).send({
                createdUsers: countUsers
            });
        });
    }
}
exports.default = new UsersController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQXlCO0FBRXpCLHdHQUE4RTtBQUM5RSx3R0FBOEU7QUFDOUUsOEdBQW9GO0FBQ3BGLDRHQUFrRjtBQUNsRiw0R0FBa0Y7QUFJbEYsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHNCQUFzQixDQUFDLENBQUM7QUFFM0QsTUFBTSxlQUFlO0lBQ1gsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3ZELE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFBQSxDQUFDO0lBRVEsWUFBWSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzFELE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFaEMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVJLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNwRCxNQUFNLEtBQUssR0FBRyxNQUFNLDhCQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekQsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3pELE1BQU0sSUFBSSxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2RCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM5QixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsTUFBTSxJQUFJLEdBQUcsTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3pDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMzQixDQUFDO0tBQUE7SUFDSyxjQUFjLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDNUQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLEtBQUksVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxFQUFDO2dCQUNwRSxNQUFNLDhCQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2FBQ25FO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLFlBQVksRUFBRSxVQUFVO2FBQzNCLENBQUMsQ0FBQztRQUNQLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLEVBQUUsQ0FBQyJ9