"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsRoutes = void 0;
const post_controller_1 = __importDefault(require("../controllers/post.controller"));
// import { auth } from "../middlewares/auth.middleware";
//import usersMiddlewares from "../middlewares/users.middlewares";
const common_routes_config_1 = require("./common.routes.config");
class PostsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PostsRoutes');
    }
    configureRoutes() {
        this.app.route(`/post`)
            .post(//postMiddleware.validateRequiredPostBodyFields,
        // postMiddleware.validatePostRepeated,
        post_controller_1.default.createPost);
        this.app.route(`/posts`)
            .get(post_controller_1.default.listPost);
        this.app.route(`/posts/:idpost`)
            //.all(postMiddleware.validatePostExists)
            .get(post_controller_1.default.getPostById)
            .put(post_controller_1.default.updatePost)
            .delete(post_controller_1.default.removePost);
        return this.app;
    }
}
exports.PostsRoutes = PostsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3Bvc3Qucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxRkFBNEQ7QUFDNUQseURBQXlEO0FBQ3pELGtFQUFrRTtBQUNsRSxpRUFBNEQ7QUFFNUQsTUFBYSxXQUFZLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQUMsZ0RBQWdEO1FBQ25ELHVDQUF1QztRQUN0Qyx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBRTlCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQzthQUN2QixHQUFHLENBQUUseUJBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUU5QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQztZQUNoQyx5Q0FBeUM7YUFDeEMsR0FBRyxDQUFDLHlCQUFjLENBQUMsV0FBVyxDQUFDO2FBQy9CLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLFVBQVUsQ0FBQzthQUM5QixNQUFNLENBQUMseUJBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUduQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBdkJELGtDQXVCQyJ9