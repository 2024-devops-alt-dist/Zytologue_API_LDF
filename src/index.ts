import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './database';
import routes from './routes/route';

dotenv.config(); 

const app = express();

//use method: to register routes or middlewares(function that runs during the life cycle of an http request)
app.use(express.json())
app.use(routes) //all the routes in "routes" are now available in the server

app.listen(3000, () => {
    console.log('Server running in http://localhost:3000');
  });


connectToDatabase();

