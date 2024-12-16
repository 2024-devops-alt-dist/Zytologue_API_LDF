import { Router } from 'express';
import {
    deleteBeer,
    getAllBeers,
    getBeer,
    postBeer,
    updateBeer 
} from '../controllers/beer_controller';
import {
    deleteBrewery,
    getAllBreweries,
    getBrewery,
    postBrewery,
    updateBrewery 
} from '../controllers/brewery_controller';

const router = Router();

// CRUD FOR BEERS

/**
 * @swagger
 * /beers:
 *   get:
 *     tags:
 *      - Beers
 *     summary: Returns a list of all the beers from all the breweries
 *     responses:
 *       200:
 *         description: The list of the beers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Beer'
 */
router.get('/beers', getAllBeers);

/**
 * @swagger
 * /beers/{idBeer}:
 *   get:
 *     tags:
 *      - Beers
 *     summary: Get a beer by its ID
 *     parameters:
 *       - in: path
 *         name: idBeer
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the beer
 *     responses:
 *       200:
 *         description: A single beer
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Beer'
 */
router.get('/beers/:idBeer', getBeer);

/**
 * @swagger
 * /beers:
 *   post:
 *     tags:
 *      - Beers
 *     summary: Add a new beer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Beer'
 *     responses:
 *       201:
 *         description: Beer created successfully
 */
router.post('/beers', postBeer);

/**
 * @swagger
 * /beers/{idBeer}:
 *   put:
 *     tags:
 *      - Beers
 *     summary: Update an existing beer
 *     parameters:
 *       - in: path
 *         name: idBeer
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the beer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Beer'
 *     responses:
 *       200:
 *         description: Beer updated successfully
 */
router.put('/beers/:idBeer', updateBeer);

/**
 * @swagger
 * /beers/{idBeer}:
 *   delete:
 *     tags:
 *      - Beers
 *     summary: Delete a beer by its ID
 *     parameters:
 *       - in: path
 *         name: idBeer
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the beer
 *     responses:
 *       200:
 *         description: Beer deleted successfully
 */
router.delete('/beers/:idBeer', deleteBeer);

// CRUD FOR BREWERIES

/**
 * @swagger
 * /breweries:
 *   get:
 *     tags:
 *      - Breweries
 *     summary: Returns a list of all the breweries
 *     responses:
 *       200:
 *         description: The list of the breweries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Brewery'
 */
router.get('/breweries', getAllBreweries);

/**
 * @swagger
 * /breweries/{idBrewery}:
 *   get:
 *     tags:
 *      - Breweries
 *     summary: Get a brewery by its ID
 *     parameters:
 *       - in: path
 *         name: idBrewery
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the brewery
 *     responses:
 *       200:
 *         description: A single brewery
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Brewery'
 */
router.get('/breweries/:idBrewery', getBrewery);

/**
 * @swagger
 * /breweries:
 *   post:
 *     tags:
 *      - Breweries
 *     summary: Add a new brewery
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brewery'
 *     responses:
 *       201:
 *         description: Brewery created successfully
 */
router.post('/breweries', postBrewery);

/**
 * @swagger
 * /breweries/{idBrewery}:
 *   put:
 *     tags:
 *      - Breweries
 *     summary: Update an existing brewery
 *     parameters:
 *       - in: path
 *         name: idBrewery
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the brewery
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Brewery'
 *     responses:
 *       200:
 *         description: Brewery updated successfully
 */
router.put('/breweries/:idBrewery', updateBrewery);

/**
 * @swagger
 * /breweries/{idBrewery}:
 *   delete:
 *     tags:
 *      - Breweries
 *     summary: Delete a brewery by its ID
 *     parameters:
 *       - in: path
 *         name: idBrewery
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the brewery
 *     responses:
 *       200:
 *         description: Brewery deleted successfully
 */
router.delete('/breweries/:idBrewery', deleteBrewery);

export default router;
