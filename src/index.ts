import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './database';
import routes from './routes/route';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { title } from 'process';

dotenv.config(); 

const app = express();
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Zytologue_LDF API',
      version: '1.0.0',
      description: 'A simple API for beer lovers(zytologues)',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
      }
    ],
  },
  apis: ['./routes/*.ts'],
};

const specs = swaggerJsDoc(options);

//use method: to register routes or middlewares(function that runs during the life cycle of an http request)
app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(routes) //all the routes in "routes" are now available in the server

app.listen(3000, () => {
    console.log('Server running in http://localhost:3000');
  });


connectToDatabase();

