//J'importe le model Movie
import {Movie} from '../models/Movie.js';

//Je fais une fonction asynchrone pour récupérer tous les films de ma bdd
export async function getAllMovies(req, res){
    //Je met le tout dans un bloc try /catch pour éviter les uncaught error
    try{
        //Je crée une constante qui fait appel à la fonction findAll (chercher plus de détails)
        const movie = await Movie.findAll();
        //Je renvoit le statu valide si le serveur me renvoit une réponse à ma fonction findAll() et je passe la réponse au format JSON
        res.status(200).json(movie);
    } catch (error){
        //Je gère et affiche l'erreur (si il y en a une) en console avec le nom de l'erreur
        console.error('Erreur lors de la récupération des films:', error);
        //Je renvoit le code erreur serveur (500) et affiche un message d'erreur pour l'utilisateur
        res.status(500).json({message: "Erreur serveur lors de la récupération des films"});
    }
};

//Je fais une fonction asynchrone pour récupérer les informations d'un seul film, grâce à son id passé dans l'url
export async function getOneMovie(req, res){
    try{
        const movieId = req.params.id;
        const oneMovie = await Movie.findByPk(movieId);
        res.status(200).json(oneMovie);
    } catch(error){
        console.error('Erreur lors de la récupération du film:', error);
        res.status(500).json({message: "Erreur serveur lors de la récupération du film"})
    }
};