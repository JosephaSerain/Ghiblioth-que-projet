// j'importe le model adequat

import {Director} from '../models/Director.js';
import { Movie } from '../models/Movie.js';

//Je fais une fonction pour récupérer tous les réalisateurs de ma bdd
export async function getAllDirector(req, res){
    //Je met le tout dans un bloc try catch pour attraper les erreurs
    try{
        //Je récupère tous les réalisateurs de ma bdd grace à findAll
        const director = await Director.findAll();
        //Si des données ont été récup, je renvois un code 200 et passe les données au format json
        res.status(200).json(director);
    } catch(error){
        //J'affiche une erreur et la spécifie en console dans le cas ou il y aurait un soucis avec le serveur
        console.error('Erreur lors de la récupération des réalisateurs:', error);
        //Je renvoit le code d'erreur serveur et envoit un message avec
        res.status(500).json({message : 'Erreur serveur lors de la récupération des réalisateurs'});
    }
};

//Fonction pour récupérer un réalisateur
export async function getOneDirector (req,res){
    try{
        const directorId = req.params.id;
        const oneDirector = await Director.findByPk(directorId);
        res.status(200).json(oneDirector);
    } catch(error){
        console.error('Erreur lors de la récupération du réalisateur:', error);
        res.status(500).json({message: 'Erreur serveur lors de la récupération du réalisateur'});
    }
};

//Fonction pour récupérer les films par réalisateurs
export async function getMovieByDirector (req, res){
    try{
        const directorId = req.params.id;
        const movieOfDirector = await Movie.findAll({
            include:[{
                model: Director,
                where:{id: directorId},
                through:{attributes: []}
            }]
        });
        if(movieOfDirector.length === 0){
            res.status(404).json({message: 'Aucun film trouvé pour ce réalisateur'});
        }
        res.status(200).json(movieOfDirector);
    } catch(error){
        console.error('Erreur lors de la récupération des films du réalisateur');
        res.status(500).json({message: 'Erreur serveur lors de la récupération des films du réalisateur'});
    }
};

