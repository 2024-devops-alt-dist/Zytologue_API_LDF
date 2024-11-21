import express, { Request, Response } from 'express';
import {Client} from 'pg';
import dotenv from 'dotenv';
dotenv.config(); 

const app = express();

const client = new Client({
    user: process.env.DATABASE_USER ,
    host: process.env.HOST,
    database: process.env.DATABASE_NAME,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.PORT ? parseInt(process.env.PORT,10) : 5433,
})

//conection with the database

async function connectToDatabase() {
    try {
      await client.connect();
      console.log("Successfully connected to the zytologue_API database!");
    } catch (error) {
        console.log("Error connecting to the zytologue_API database",error); 
    }
}

connectToDatabase();

// // Define una ruta para el endpoint raíz
// app.get('/', (req: Request, res: Response) => {
//   res.send('¡Hola, mundo!');
// });

// // Inicia el servidor en el puerto 3000
// app.listen(3000, () => {
//   console.log('Servidor corriendo en http://localhost:3000');
// });
