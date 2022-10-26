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
const post_repository_1 = __importDefault(require("../../../adapters/repositories/post.repository"));
class CreatePostUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.create(data);
        });
    }
}
exports.default = new CreatePostUseCase(post_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLnBvc3QudXNlY2FzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9kb21haW4vdXNlY2FzZXMvcG9zdC9jcmVhdGUucG9zdC51c2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBR0EscUdBQTRFO0FBRTVFLE1BQU0saUJBQWlCO0lBRW5CLFlBQW9CLFdBQTRCO1FBQTVCLGdCQUFXLEdBQVgsV0FBVyxDQUFpQjtJQUVoRCxDQUFDO0lBRUssT0FBTyxDQUFDLElBQWlCOztZQUMzQixPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGlCQUFpQixDQUNoQyx5QkFBYyxDQUNqQixDQUFDIn0=