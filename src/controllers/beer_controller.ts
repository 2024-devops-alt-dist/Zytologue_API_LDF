import { Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";

export const getAllBeers = async (req: Request, res: Response): Promise<any> => {
    try {
        const response: QueryResult = await client.query(
            'SELECT * FROM beer');
        if(response.rows.length === 0) {
            return res.status(404).json({message: 'Beers not found'});
        }

        res.status(200).json(response.rows); 

    } catch (error) {
        console.error( 'Error fetching beers',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const getBeer =  async (req: Request, res: Response): Promise<any> => {
    try {
        const {idBeer} = req.params;
        const beerId = parseInt(idBeer, 10);

        if(!idBeer) {
            return res.status(400).json({message : 'the beer id is required'})
        }

        const response: QueryResult = await client.query(
            'SELECT * FROM beer WHERE id_beer = $1',
            [beerId]
        );

        if(response.rows.length === 0) {
            return res.status(404).json({message: 'Beer not found'});
        }

        return res.status(200).json(response.rows);


    } catch (error) {
        console.error( 'Error fetching beer',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const postBeer =  async (req: Request, res: Response): Promise<any> => {
    try {
        const {
            beer_name,
            description,
            abv,
            colour,
            bitternes,
            body,
            release_date,
            photoURL,
            id_brewery,
            id_category
        } = req.body;
        
        if(!beer_name || !id_brewery || !id_category) {
            return res.status(400).json({
                message: 'beer_name, id_brewery and id_category are required'
            });
        }

        const response: QueryResult = await client.query(
            `
            INSERT INTO beer (
                beer_name, 
                description, 
                abv, 
                colour, 
                bitternes, 
                body, 
                release_date, 
                photoURL, 
                id_brewery, 
                id_category
            ) VALUES (
                $1, $2, $3, $4, $5, $6, $7, $8, $9, $10
            ) RETURNING *;
            `,
            [
                beer_name,
                description || null,
                abv || null,
                colour || null,
                bitternes || null,
                body || null,
                release_date || null,
                photoURL || null,
                id_brewery,
                id_category
            ]
        );

        return res.status(200).json(response.rows);

    } catch (error) {
        console.error( 'Error inserting beer',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const updateBeer =  async (req: Request, res: Response): Promise<any> => {
    try {
        const {idBeer} = req.params;
        const {
            beer_name,
            description,
            abv,
            colour,
            bitternes,
            body,
            release_date,
            photoURL,
            id_brewery,
            id_category
        } = req.body;
        const beerId = parseInt(idBeer, 10);

        if(!idBeer) {
            return res.status(400).json({message : 'the beer id is required'})
        }

        const response: QueryResult = await client.query(
            'SELECT * FROM beer WHERE id_beer = $1',
            [beerId]
        );

        if(response.rows.length === 0) {
            return res.status(404).json({message: 'Beer not found'});
        }

        const currentBeer = response.rows[0];
        console.log('Beer before update:', currentBeer);

        const updateResponse = await client.query(
            `UPDATE beer
            SET
                beer_name = $1,
                description = $2,
                abv = $3,
                colour = $4,
                bitternes = $5,
                body = $6,
                release_date = $7,
                photoURL = $8,
                id_brewery = $9,
                id_category = $10
            WHERE id_beer = $11`,
            [
                beer_name,
                description,
                abv,
                colour,
                bitternes,
                body,
                release_date,
                photoURL,
                id_brewery,
                id_category,
                beerId
            ]
        );

        const updatedBeerResponse = await client.query(
            'SELECT * FROM beer WHERE id_beer = $1',
            [beerId]
        );
        const updatedBeer = updatedBeerResponse.rows[0];
        console.log('Beer after update:', updatedBeer);


        return res.status(200).json(updateResponse.rows);

    } catch (error) {
        console.error( 'Error updating beer',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const deleteBeer =  async (req: Request, res: Response): Promise<any> => {
    try {
        const {idBeer} = req.params;
        const beerId = parseInt(idBeer, 10);

        if(!idBeer) {
            return res.status(400).json({message : 'the beer id is required'})
        }

        const response: QueryResult = await client.query(
            'DELETE FROM beer WHERE id_beer = $1',
            [beerId]
        );

        if(response.rowCount === 0) {
            return res.status(404).json({message: 'Beer not found'});
        }

        return res.status(200).json({message: 'Beer deleted successfully'});


    } catch (error) {
        console.error( 'Error deleting beer',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};