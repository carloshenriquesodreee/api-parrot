"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRoutes = void 0;
const common_routes_config_1 = require("./common.routes.config");
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
const post_middleware_1 = __importDefault(require("../middlewares/post.middleware"));
class PostRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostRoutes');
    }
    configureRoutes() {
        this.app.route(`/Post`)
            .get(post_controller_1.default.listPost)
            .post(post_middleware_1.default.validateRequiredPostBodyFields, post_middleware_1.default.validatePostRepeated, post_controller_1.default.createPost);
        this.app.route(`/post/:postid`)
            .all(post_middleware_1.default.validatePostExists)
            .get(post_controller_1.default.getPostById)
            .put(post_middleware_1.default.validateRequiredPostBodyFields, post_controller_1.default.updatePosts)
            .delete(post_controller_1.default.removePosts);
        return this.app;
    }
}
exports.PostRoutes = PostRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3Bvc3Qucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxpRUFBNEQ7QUFDNUQscUZBQTREO0FBQzVELHFGQUE0RDtBQUc1RCxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ2xCLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLFFBQVEsQ0FBQzthQUM1QixJQUFJLENBQ0QseUJBQWMsQ0FBQyw4QkFBOEIsRUFDN0MseUJBQWMsQ0FBQyxvQkFBb0IsRUFDbkMseUJBQWMsQ0FBQyxVQUFVLENBQzVCLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDbEIsR0FBRyxDQUFDLHlCQUFjLENBQUMsa0JBQWtCLENBQUM7YUFDdEMsR0FBRyxDQUFDLHlCQUFjLENBQUMsV0FBVyxDQUFDO2FBQy9CLEdBQUcsQ0FDQSx5QkFBYyxDQUFDLDhCQUE4QixFQUM3Qyx5QkFBYyxDQUFDLFdBQVcsQ0FDN0I7YUFDQSxNQUFNLENBQUMseUJBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBekJELGdDQXlCQyJ9