import * as expressWinston from 'express-winston';
import * as http from 'http';
import cors from 'cors';
import { debug } from 'debug';
import  express  from 'express';
import * as winston from "winston";

import { CommonRoutesConfig } from '../../adapters/apis/routes/common.routes.config';
import { PostsRoutes } from '../../adapters/apis/routes/post.routes.config';
import { UserRoutes } from '../../adapters/apis/routes/user.routes.config';
import { AuthRoutes } from '../../adapters/apis/routes/auth.routes.config';


const app: express.Application = express();
const server: http.Server = http.createServer(app);
const PORT =  3009;
const routes: CommonRoutesConfig[] = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
}

if(!process.env.DEBUG) {
    loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));

routes.push(new PostsRoutes(app));
routes.push(new UserRoutes(app));
routes.push(new AuthRoutes(app));

const runningMessage = `Servidor rodando na porta ${PORT}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
})

server.listen(PORT, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Rotas configuradas para ${route.getName()}`);
    });
    console.log(runningMessage);
});
    
    export default app;