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
const constants_config_1 = __importDefault(require("../../../infrastructure/config/constants.config"));
const read_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/read.post.usecase"));
const winston_logs_1 = __importDefault(require("../../../infrastructure/logs/winston.logs"));
const log = (0, debug_1.default)('app:users-middleware');
class PostMiddleware {
    validateRequiredPostBodyFields(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body && req.body.iduser !== undefined) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.BODYFIELDS_NO });
            }
        });
    }
    validatePostExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield read_post_usecase_1.default.execute({
                idpost: Number(req.params.idpost)
            });
            if (posts) {
                winston_logs_1.default.info([' post encontrado: ', posts]);
                next();
            }
            else {
                winston_logs_1.default.error(`Post ${req.params.idpost} não existe`);
                res.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.USERSEXISTS_NO });
            }
        });
    }
    validatePostRepeated(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let Id = req.body.idpost;
            const posts = yield read_post_usecase_1.default.execute({
                idpost: Id
            });
            if (!posts) {
                next();
            }
            else {
                res.status(400).send({ error: constants_config_1.default.MIDDLEWARE.MESSAGES.ERROR.USERSREPEATED_YES });
            }
        });
    }
}
exports.default = new PostMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvbWlkZGxld2FyZXMvcG9zdC5taWRkbGV3YXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esa0RBQTBCO0FBRTFCLHVHQUE4RTtBQUM5RSx3R0FBOEU7QUFDOUUsNkZBQStEO0FBSS9ELE1BQU0sR0FBRyxHQUFvQixJQUFBLGVBQUssRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBRTNELE1BQU0sY0FBYztJQUNWLDhCQUE4QixDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxJQUEwQjs7WUFDeEcsSUFBSSxHQUFHLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLFNBQVMsRUFBQztnQkFDMUMsSUFBSSxFQUFFLENBQUM7YUFDVjtpQkFBSztnQkFDRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQyxDQUFDLENBQUE7YUFDekY7UUFDTCxDQUFDO0tBQUE7SUFFSyxrQkFBa0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzVGLE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsQ0FBQyxDQUFDO1lBQ0gsSUFBRyxLQUFLLEVBQUM7Z0JBQ0wsc0JBQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO2dCQUMxQyxJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFLO2dCQUNGLHNCQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLGFBQWEsQ0FBQyxDQUFBO2dCQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSwwQkFBZSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBQyxDQUFDLENBQUE7YUFDMUY7UUFDTCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsSUFBMEI7O1lBQzlGLElBQUksRUFBRSxHQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ2pDLE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLE1BQU0sRUFBRSxFQUFFO2FBQ2IsQ0FBQyxDQUFDO1lBQ0gsSUFBRyxDQUFDLEtBQUssRUFBQztnQkFDTixJQUFJLEVBQUUsQ0FBQzthQUNWO2lCQUFLO2dCQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLDBCQUFlLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUMsQ0FBQyxDQUFBO2FBQzdGO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=