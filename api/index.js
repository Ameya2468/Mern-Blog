import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import connectToDb from './db/db.js';
import authRoutes from './routes/auth.route.js';
import { setServers } from 'node:dns/promises';

setServers(['1.1.1.1', '8.8.8.8']);
dotenv.config();
console.log(process.env.MONGO)

connectToDb();

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
app.use(express.json());
app.use('/user',userRoutes);
app.use('/auth',authRoutes);