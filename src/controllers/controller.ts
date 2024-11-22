import { Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";

export const getAllUsers = async (req: Request, res: Response) => {
    const response: QueryResult = await client.query('SELECT * FROM "user"');
    res.status(200).json(response.rows); // Envía los datos al cliente
    console.log(response.rows);
};

// export const getUser = (req: Request, res: Response) => {
//     res.send
// };

// export const postUser = (req: Request, res: Response) => {
//     res.send
// };

// export const updateUser = (req: Request, res: Response) => {
//     res.send
// };

// export const deleteUser = (req: Request, res: Response) => {
//     res.send
// };