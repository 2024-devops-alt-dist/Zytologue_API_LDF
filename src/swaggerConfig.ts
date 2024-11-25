import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import {APP_PORT} from './index'

const options: Options = {
    definition: {
        openapi: '3.0.0',
        info: {
          title: 'Zytologue_LDF API',
          version: '1.0.0',
          description: 'A simple API for beer lovers(zytologues)',
        },
        servers: [
          {
            url: `http://localhost:${APP_PORT}`,
          }
        ],
      },
      apis: ['./src/routes/*.ts'],
    };

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
