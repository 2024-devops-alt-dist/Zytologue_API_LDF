import { Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";

export const getAllBeers = async (req: Request, res: Response) => {
    const response: QueryResult = await client.query('SELECT * FROM beer');
    res.status(200).json(response.rows); // Envía los datos al cliente
    console.log(response.rows);
};

export const getBrewery = async (req: Request, res: Response) => {
    
}

// export const postBrewery = (req: Request, res: Response) => {
//     res.send
// };

// export const updateBrewery = (req: Request, res: Response) => {
//     res.send
// };

// export const deleteBrewery = (req: Request, res: Response) => {
//     res.send
// };