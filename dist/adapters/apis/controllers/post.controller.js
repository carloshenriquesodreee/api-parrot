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
const create_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/create.post.usecase"));
const delete_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/delete.post.usecase"));
const read_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/read.post.usecase"));
const list_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/list.post.usecase"));
const update_post_usecase_1 = __importDefault(require("../../../domain/usecases/post/update.post.usecase"));
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:post-controller');
class PostController {
    listPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const posts = yield list_post_usecase_1.default.execute();
            res.status(200).send(posts);
        });
    }
    getPostById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield read_post_usecase_1.default.execute({
                idpost: Number(req.params.idpost)
            });
            res.status(200).send(post);
        });
    }
    createPost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield create_post_usecase_1.default.execute(req.body);
            log(post);
            res.status(201).send(post);
        });
    }
    updatePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield update_post_usecase_1.default.execute(req.body);
            res.status(200).send(post);
        });
    }
    removePost(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield delete_post_usecase_1.default.execute({
                idpost: Number(req.params.idpost),
            });
            res.status(204).send();
        });
    }
    createPostBulk(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let countUsers = 0;
            for (countUsers = 0; countUsers < req.body.fileData.length; countUsers++) {
                yield create_post_usecase_1.default.execute(req.body.fileData[countUsers]);
            }
            res.status(201).send({
                createdUsers: countUsers
            });
        });
    }
}
exports.default = new PostController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvY29udHJvbGxlcnMvcG9zdC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNEdBQWtGO0FBQ2xGLDRHQUFrRjtBQUNsRix3R0FBOEU7QUFDOUUsd0dBQThFO0FBQzlFLDRHQUFrRjtBQUNsRixrREFBMEI7QUFHMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLHFCQUFxQixDQUFDLENBQUM7QUFFMUQsTUFBTSxjQUFjO0lBQ1YsUUFBUSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3RELE1BQU0sS0FBSyxHQUFHLE1BQU0sMkJBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM5QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFDSyxXQUFXLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDekQsTUFBTSxJQUFJLEdBQUcsTUFBTSwyQkFBZSxDQUFDLE9BQU8sQ0FBQztnQkFDdkMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNwQyxDQUFDLENBQUM7WUFDSCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQixDQUFDO0tBQUE7SUFDSyxVQUFVLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDeEQsTUFBTSxJQUFJLEdBQUcsTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZELEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNWLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLENBQUM7S0FBQTtJQUNLLFVBQVUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUN4RCxNQUFNLElBQUksR0FBRyxNQUFNLDZCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDbEMsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQ3hELE1BQU0sSUFBSSxHQUFHLE1BQU0sNkJBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN6QyxNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ3BDLENBQUMsQ0FBQztZQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFOUIsQ0FBQztLQUFBO0lBQ0ssY0FBYyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7O1lBQzVELElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztZQUNuQixLQUFJLFVBQVUsR0FBRyxDQUFDLEVBQUUsVUFBVSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsRUFBQztnQkFDcEUsTUFBTSw2QkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQzthQUNsRTtZQUNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNqQixZQUFZLEVBQUUsVUFBVTthQUMzQixDQUFDLENBQUM7UUFDWCxDQUFDO0tBQUE7Q0FBQztBQUNGLGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==