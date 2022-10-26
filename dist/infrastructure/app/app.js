"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const expressWinston = __importStar(require("express-winston"));
const http = __importStar(require("http"));
const cors_1 = __importDefault(require("cors"));
const debug_1 = require("debug");
const express_1 = __importDefault(require("express"));
const winston = __importStar(require("winston"));
const post_routes_config_1 = require("../../adapters/apis/routes/post.routes.config");
const user_routes_config_1 = require("../../adapters/apis/routes/user.routes.config");
const app = (0, express_1.default)();
const server = http.createServer(app);
const PORT = 3009;
const routes = [];
const debugLog = (0, debug_1.debug)('app');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use((0, cors_1.default)());
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
app.use(expressWinston.logger(loggerOptions));
routes.push(new post_routes_config_1.PostsRoutes(app));
routes.push(new user_routes_config_1.UserRoutes(app));
const runningMessage = `Servidor rodando na porta ${PORT}`;
app.get('/', (req, res) => {
    res.status(200).send(runningMessage);
});
server.listen(PORT, () => {
    routes.forEach((route) => {
        debugLog(`Rotas configuradas para ${route.getName()}`);
    });
    console.log(runningMessage);
});
exports.default = app;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2luZnJhc3RydWN0dXJlL2FwcC9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdFQUFrRDtBQUNsRCwyQ0FBNkI7QUFDN0IsZ0RBQXdCO0FBQ3hCLGlDQUE4QjtBQUM5QixzREFBZ0M7QUFDaEMsaURBQW1DO0FBR25DLHNGQUE0RTtBQUM1RSxzRkFBMkU7QUFHM0UsTUFBTSxHQUFHLEdBQXdCLElBQUEsaUJBQU8sR0FBRSxDQUFDO0FBQzNDLE1BQU0sTUFBTSxHQUFnQixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ25ELE1BQU0sSUFBSSxHQUFJLElBQUksQ0FBQztBQUNuQixNQUFNLE1BQU0sR0FBeUIsRUFBRSxDQUFDO0FBQ3hDLE1BQU0sUUFBUSxHQUFvQixJQUFBLGFBQUssRUFBQyxLQUFLLENBQUMsQ0FBQztBQUUvQyxHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztBQUM5QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztBQUVoQixNQUFNLGFBQWEsR0FBaUM7SUFDaEQsVUFBVSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzlDLE1BQU0sRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FDMUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDekM7Q0FDSixDQUFBO0FBRUQsSUFBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO0lBQ25CLGFBQWEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0NBQzlCO0FBRUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFFOUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLGdDQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNsQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksK0JBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBRWpDLE1BQU0sY0FBYyxHQUFHLDZCQUE2QixJQUFJLEVBQUUsQ0FBQztBQUMzRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO0lBQ3pELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFBO0FBRUYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUF5QixFQUFFLEVBQUU7UUFDekMsUUFBUSxDQUFDLDJCQUEyQixLQUFLLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNoQyxDQUFDLENBQUMsQ0FBQztBQUVDLGtCQUFlLEdBQUcsQ0FBQyJ9