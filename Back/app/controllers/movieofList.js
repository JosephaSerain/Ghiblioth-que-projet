//J'importe les models requis
import {List} from '../models/List.js';
import {Movie} from '../models/Movie.js';
import {MovieList} from '../models/MovieList.js';

//Fonction pour ajouter un film à une liste
export async function addMovieToList (req, res){
    try{
        const listId = req.params.listId;
        const movieId = req.params.movieId;
        const [ListMovie, created] = await MovieList.findOrCreate({
            where:{ list_id: listId, movie_id: movieId}
        });
        if(created){
            console.log('Association créée avec succès');
        } else{
            console.log('Cette association existe déjà');
        }
        const updatedList = await List.findByPk(listId,{
            include:[Movie]
        });
        res.status(200).json(updatedList);
    }catch (error){
        console.error("Erreur lors de l'ajout du film à la liste:", error);
        res.status(500).json({message: "Erreur serveur lors de l'ajout du film à la liste"})
    }
};

//Fonction pour retirer un film d'une liste
export async function removeMovieFromList(req,res){
    try{
        const listId = req.params.listId;
        const movieId = req.params.movieId;

        const list = await List.findByPk(listId);
        if(!list){
            return res.status(404).json({message: "Aucune liste n'a été trouvée"});
        };
        const deleted = await MovieList.destroy({
            where: {
                list_id: listId,
                movie_id: movieId
            }
        });

        if(deleted === 0){
            return res.status(404).json({error: "Ce film n'est pas dans cette liste"})
        };

        const updatedList = await List.findByPk(listId, {
            include: [Movie]
        });

        res.status(200).json({
            message: "Film retiré de la liste avec succès",
            list: updatedList
        });

    }catch(error){
        console.error('Erreur lors du retrait du film de la liste');
        res.status(500).json({ 
            error: "Erreur serveur lors de la suppression du film de la liste",
            details: error.message
        });
    }
    
};

//Fonction pour récupérer les films d'une liste

export async function getMovieOfList (req, res){
    try{
        const listId = req.params.id;
        const movieOfList = await Movie.findAll({
            include: [{
              model: List,
              where: {id: listId},
              through:{attributes: []}
            }]
        });
        if (movieOfList.length===0){
            return res.status(404).json({message: "Aucun film dans cette liste"});
        }
        res.status(200).json(movieOfList);
    } catch(error){
        console.error('Erreur lors de la récupération des films de la liste');
        res.status(500).json({message: 'Erreur serveur lors de la récupération des films de la liste'});
    }
};