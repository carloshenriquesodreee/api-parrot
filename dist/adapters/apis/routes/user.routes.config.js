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
            .get(user_controller_1.default.getUsersById)
            .put(user_controller_1.default.updateUsers)
            .delete(user_controller_1.default.removeUsers);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FkYXB0ZXJzL2FwaXMvcm91dGVzL3VzZXIucm91dGVzLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxxRkFBNEQ7QUFDNUQseURBQXlEO0FBQ3pELGtFQUFrRTtBQUNsRSxpRUFBNEQ7QUFHNUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQzlDLFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzthQUN0QixJQUFJLENBQUMsd0NBQXdDO1FBQ3hDLHlCQUFjLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFaEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3ZCLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRTlCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDO2FBQy9CLEdBQUcsQ0FBRSx5QkFBYyxDQUFDLFlBQVksQ0FBQzthQUNqQyxHQUFHLENBQUUseUJBQWMsQ0FBQyxXQUFXLENBQUM7YUFDaEMsTUFBTSxDQUFDLHlCQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7UUFHcEMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFBO0lBQ25CLENBQUM7Q0FDSjtBQXJCRCxnQ0FxQkMifQ==