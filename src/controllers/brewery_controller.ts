import { Request, Response } from "express";
import { client } from "../database";
import { QueryResult } from "pg";

export const getAllBreweries = async (req: Request, res: Response): Promise<any> => {
    try {
        const response: QueryResult = await client.query(
            'SELECT * FROM brewery');
        if(response.rows.length === 0) {
            return res.status(404).json({message: 'Breweries not found'});
        }

        res.status(200).json(response.rows); 

    } catch (error) {
        console.error( 'Error fetching Breweries',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const getBrewery =  async (req: Request, res: Response): Promise<any> => {
    try {
        const {idBrewery} = req.params;
        const breweryId = parseInt(idBrewery, 10);

        if(!idBrewery) {
            return res.status(400).json({message : 'the brewery id is required'})
        }

        const response: QueryResult = await client.query(
            'SELECT * FROM brewery WHERE id_brewery = $1',
            [breweryId]
        );

        if(response.rows.length === 0) {
            return res.status(404).json({message: 'brewery not found'});
        }

        return res.status(200).json(response.rows);


    } catch (error) {
        console.error( 'Error fetching brewery',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const postBrewery =  async (req: Request, res: Response): Promise<any> => {
    try {
        const {
            brewery_name,
            country,
            region,
            city,
            adress,
            inauguration_date
        } = req.body;

        if (!brewery_name || !country) {
            return res.status(400).json({
                message: 'brewery_name and country are required'
            });
        }

        const response: QueryResult = await client.query(
            `
            INSERT INTO brewery (
                brewery_name, 
                country, 
                region, 
                city, 
                adress, 
                inauguration_date
            ) VALUES (
                $1, $2, $3, $4, $5, $6
            ) RETURNING *;
            `,
            [
                brewery_name,
                country,
                region || null,
                city || null,
                adress || null,
                inauguration_date || null
            ]
        );

        return res.status(200).json(response.rows);

    } catch (error) {
        console.error( 'Error inserting brewery',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const updateBrewery =  async (req: Request, res: Response): Promise<any> => {
    try {
        const {idBrewery} = req.params;
        const {
            brewery_name,
            country,
            region,
            city,
            adress,
            inauguration_date
        } = req.body;
        const breweryId = parseInt(idBrewery, 10);

        if(!idBrewery) {
            return res.status(400).json({message : 'the brewery id is required'})
        }

        const response: QueryResult = await client.query(
            'SELECT * FROM brewery WHERE id_brewery = $1',
            [breweryId]
        );

        if(response.rows.length === 0) {
            return res.status(404).json({message: 'brewery not found'});
        }

        const currentbrewery = response.rows[0];
        console.log('brewery before update:', currentbrewery);

        const updateResponse = await client.query(
            `UPDATE brewery
            SET
                brewery_name = $1,
                country = $2,
                region = $3,
                city = $4,
                adress = $5,
                inauguration_date = $6
            WHERE id_brewery = $7`,
            [
                brewery_name,
                country,
                region || null,
                city || null,
                adress || null,
                inauguration_date || null,
                breweryId
            ]
        );

        const updatedbreweryResponse = await client.query(
            'SELECT * FROM brewery WHERE id_brewery = $1',
            [breweryId]
        );
        const updatedbrewery = updatedbreweryResponse.rows[0];
        console.log('brewery after update:', updatedbrewery);


        return res.status(200).json(updateResponse.rows);

    } catch (error) {
        console.error( 'Error updating brewery',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};

export const deleteBrewery =  async (req: Request, res: Response): Promise<any> => {
    try {
        const {idBrewery} = req.params;
        const breweryId = parseInt(idBrewery, 10);

        if(!idBrewery) {
            return res.status(400).json({message : 'the brewery id is required'})
        }

        const response: QueryResult = await client.query(
            'DELETE FROM brewery WHERE id_brewery = $1',
            [breweryId]
        );

        if(response.rowCount === 0) {
            return res.status(404).json({message: 'brewery not found'});
        }

        return res.status(200).json({message: 'brewery deleted successfully'});


    } catch (error) {
        console.error( 'Error deleting brewery',error);
        return res.status(500).json({message: 'Internal server error'});
    }
};