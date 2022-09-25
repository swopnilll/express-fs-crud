import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import logger from './misc/logger';
import { router } from './routes/routes';
import { notFound } from './middlware/notFound';
import { errorHandler } from './middlware/errorHandler';

dotenv.config();
const app: Application = express();

app.use(express.json())
app.use(cors());

app.use(router);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => logger.info(`Server is running on port ${PORT}`));