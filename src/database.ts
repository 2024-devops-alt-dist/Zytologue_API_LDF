import { Client } from "pg";
import dotenv from 'dotenv';
dotenv.config(); 

export const client = new Client({
    user: process.env.DATABASE_USER as string ,
    host: process.env.HOST as string,
    database: process.env.DATABASE_NAME as string,
    password: process.env.DATABASE_PASSWORD as string,
    port: process.env.PORT as unknown as number,
});

//connection to database

export async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Successfully connected to the zytologue_API database!");
    } catch (error) {
        console.log("Error connecting to the zytologue_API database",error); 
    }
}
