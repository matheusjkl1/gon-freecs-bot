import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './router.js';
import { VerifyDiscordRequest } from '../utils.js';

dotenv.config();
const app = express();

app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));
app.use(express.json());
app.use(cors());
app.use(router);

export default app;