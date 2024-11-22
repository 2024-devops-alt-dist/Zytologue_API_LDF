import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './database';

dotenv.config(); 
connectToDatabase();

// // Define una ruta para el endpoint raíz
// app.get('/', (req: Request, res: Response) => {
//   res.send('¡Hola, mundo!');
// });

// // Inicia el servidor en el puerto 3000
// app.listen(3000, () => {
//   console.log('Servidor corriendo en http://localhost:3000');
// });
