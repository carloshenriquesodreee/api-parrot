"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
// import { auth } from "../middlewares/auth.middleware";
//import usersMiddlewares from "../middlewares/users.middlewares";
const common_routes_config_1 = require("./common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app.route(`/user`)
            .post(//usersMiddlewares.validateUserRepeated,
        user_controller_1.default.createUser);
        this.app.route(`/users`)
            .get(user_controller_1.default.listUsers);
        this.app.route(`/users/:iduser`)
            // .all(usersMiddlewares.validateUserExists)
            .get(user_controller_1.default.getUsersById)
            .put(user_controller_1.default.updateUsers)
            .delete(user_controller_1.default.removeUsers);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3VzZXIucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxRkFBNEQ7QUFDNUQseURBQXlEO0FBQ3pELGtFQUFrRTtBQUNsRSxpRUFBNEQ7QUFFNUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQzlDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQUMsd0NBQXdDO1FBQ3hDLHlCQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBRSx5QkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRS9CLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO1lBQ2pDLDRDQUE0QzthQUMxQyxHQUFHLENBQUMseUJBQWMsQ0FBQyxZQUFZLENBQUM7YUFDaEMsR0FBRyxDQUFFLHlCQUFjLENBQUMsV0FBVyxDQUFDO2FBQ2hDLE1BQU0sQ0FBQyx5QkFBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBR3BDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQTtJQUNuQixDQUFDO0NBQ0o7QUF0QkQsZ0NBc0JDIn0=