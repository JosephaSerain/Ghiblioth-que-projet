// J'importe le model correspondant
import {Type} from '../models/Type.js';
import { Movie } from '../models/Movie.js';

//Je fais une fonction asynchrone pour récupérer tous les genre de films
export async function getAllTypes (req, res){
    //Je met le tout dans un bloc try/catch pour ne pas avoir d'uncaught errors
    try{
        //Je fais une constante pour récupérer la liste des genre de films qui est dans la bdd
        const types = await Type.findAll();
        //Quand la réponse est reçue je renvoit le bon statut et je passe la les données au format json
        res.status(200).json(types);
    } catch (error) {
        //Je gère l'affichage de l'erreur en console avec un message
        console.error('Erreur serveur lors de la récupération des genres:', error);
        //Je renvois le statut d'erreur et passe un message au format json
        res.status(500).json({message:'Erreur serveur lors de la récupération des genres'});
    }
};

//fonction pour récupérer un genre de film d'après son id
export async function getOneType (req, res){
    try{
        const typeId = req.params.id;
        const oneType = await Type.findByPk(typeId);
        res.status(200).json(oneType);
    }catch(error){
        console.error('Erreur serveur lors de la récupération du genre:', error);
        res.status(500).json({message: 'Erreur serveur lors de la récupération du genre'});
    }
};

//Fonction pour récupérer les films par genre
export async function getMovieByType(req, res){
    try{
        const typeId= req.params.id;
        const movieOfType = await Movie.findAll({
            include:[{
                model: Type,
                where: {id: typeId},
                through:{attributes: []}
            }]
        });
        if(movieOfType.length===0){
            return res.status(404).json({message: 'Aucun film trouvé pour ce type'});
        }
        res.status(200).json(movieOfType);
    } catch (error){
        console.error('Erreur lors de la récupération des films par genre:', error);
        res.status(500).json({message: 'Erreur serveur lors de la récupération des films par genre'});
    }
};