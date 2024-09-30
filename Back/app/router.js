//Import du router de Express
import {Router} from "express";


//Import des controllers 
import * as movieController from './controllers/movie.js';
import * as typeController from './controllers/type.js';
import * as directorController from './controllers/director.js';
import * as listController from './controllers/list.js';
import * as listMovieController from './controllers/movieofList.js';


export const router = Router();

//Route pour afficher tous les films
router.get('/films', movieController.getAllMovies);
//Route pour afficher les infos d'un seul film
router.get('/films/:id', movieController.getOneMovie);
//Route pour récupérer tous les genres de films
router.get('/genre', typeController.getAllTypes);
//Route pour récupérer un genre de film
router.get('/genre/:id', typeController.getOneType);
//Route pour récupérer les films par genre
router.get('/genre/:id/films', typeController.getMovieByType);
//Route pour récupérer tous les réalisateurs de films
router.get('/realisateurs', directorController.getAllDirector);
//Route pour récupérer un réalisateur
router.get('/realisateurs/:id', directorController.getOneDirector);
//Route pour récupérer les films d'un réalisateur
router.get('/realisateurs/:id/films', directorController.getMovieByDirector);
//Route pour récupérer toutes les listes
router.get('/listes', listController.getAllList);
//Router pour récupérer une liste
router.get('/listes/:id', listController.getOneList);
//Route pour ajouter un film à une liste
router.put('/listes/:listId/films/:movieId', listMovieController.addMovieToList);
//Route pour supprimer un film d'une liste
router.delete('/listes/:listId/films/:movieId', listMovieController.removeMovieFromList);
//Route pour récupérer les films d'unne liste
router.get('/listes/:id/films', listMovieController.getMovieOfList);
//Route pour ajouter une liste 
router.post ('/listes', listController.addList);
//Rote pour supprimer une liste
router.delete('/listes/:id', listController.removeList);
//Route pour modifier une liste
router.patch ('/listes/:id', listController.modifyList);