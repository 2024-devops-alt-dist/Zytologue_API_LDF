import { Router} from 'express';
import {deleteBeer,
    getAllBeers,
    getBeer,
    postBeer,
    updateBeer } from '../controllers/beer_controller';
import {deleteBrewery,
    getAllBreweries,
    getBrewery,
    postBrewery,
    updateBrewery } from '../controllers/beer_controller';

const router = Router();

// CRUD FOR BEERS
router.get('/beers', getAllBeers);
router.get('/beers/:idBeer', getBeer);
router.post('/beers', postBeer);
router.put('/beers/:idBeer', updateBeer);
router.delete('/beers/:idBeer', deleteBeer);

//CRUD FOR BREWERIES
router.get('/breweries', getAllBreweries);
router.get('/breweries/:idBrewery', getBrewery);
router.post('/breweries', postBrewery);
router.put('/breweries/:idBrewery', updateBrewery);
router.delete('/breweries/:idBrewery', deleteBrewery);

export default router;


