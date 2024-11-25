import swaggerJSDoc, { Options } from 'swagger-jsdoc';
import {APP_PORT} from './index'

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Zytologue_LDF API',
      version: '1.0.0',
      description: 'A simple API for beer lovers (zytologues)',
    },
    servers: [
      {
        url: `http://localhost:${APP_PORT}`,
      },
    ],
    components: {
      schemas: {
        Beer: {
          type: 'object',
          required: ['id', 'name', 'id_brewery', 'id_category'],
          properties: {
            id: {
              type: 'integer',
              description: 'The auto-increment generated id of the beer',
            },
            name: {
              type: 'string',
              description: 'Name of the beer',
            },
            description: {
              type: 'string',
              description: 'A little description of the beer',
            },
            abv: {
              type: 'integer',
              description: 'Volume of alcohol contained in the beer',
            },
            colour: {
              type: 'string',
              description: 'Colour of the beer',
            },
            bitternes: {
              type: 'integer',
              description: 'How bitter is the beer, measured in international bitterness units',
            },
            body: {
              type: 'string',
              description: 'Body of the beer',
            },
            release_date: {
              type: 'string',
              format: 'date-time',
              description: 'Date of when the beer went out in the market',
            },
            photoURL: {
              type: 'string',
              description: 'A photo of the beer for reference',
            },
            id_brewery: {
              type: 'integer',
              description: 'Id of the brewery from where the beer is produced',
            },
            id_category: {
              type: 'integer',
              description: 'Id of the category that the beer belongs to',
            },
          },
        },
        Brewery: {
          type: 'object',
          required: ['id_brewery', 'brewery_name'],
          properties: {
            id_brewery: {
              type: 'integer',
              description: 'Unique identifier for the brewery (auto-incremented)',
            },
            brewery_name: {
              type: 'string',
              maxLength: 50,
              description: 'Name of the brewery',
            },
            country: {
              type: 'string',
              maxLength: 50,
              description: 'Country where the brewery is located',
            },
            region: {
              type: 'string',
              maxLength: 50,
              description: 'Region where the brewery is located',
            },
            city: {
              type: 'string',
              maxLength: 50,
              description: 'City where the brewery is located',
            },
            adress: {
              type: 'string',
              maxLength: 150,
              description: 'Address of the brewery',
            },
            inauguration_date: {
              type: 'string',
              format: 'date',
              description: 'Date when the brewery was inaugurated',
            },
          },
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'],
};



const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
