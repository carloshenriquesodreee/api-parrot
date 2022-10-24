import * as expressWinston from 'express-winston';
import * as http from 'http';
import cors from 'cors';
import { debug } from 'debug';
import  express  from 'express';
import * as winston from "winston";

import { CommonRoutesConfig } from '../../adapters/apis/routes/common.routes.config';
import { PostRoutes } from '../../adapters/apis/routes/post.routes.config';


const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
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

routes.push(new PostRoutes(app));


const runningMessage = `Servidor rodando na porta ${port}`;
app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
})

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Rotas configuradas para ${route.getName()}`);
    });
    console.log(runningMessage);
});

export default app;