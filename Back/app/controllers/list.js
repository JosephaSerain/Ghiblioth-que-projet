//J'importe le model adéquat
import {List} from '../models/List.js';

//Fonction pour récupérer toutes les listes
export async function getAllList(req,res){
    //Je met le tout dans un bloc try catch pour la gestion d'erreur
    try{
        // je récupère les listes de la bdd avec la fonction finAll()
        const lists = await List.findAll();
        //Quand je les ai récupéré  je renvois le bon statut et je les passe au format json
        res.status(200).json(lists);
    } catch (error){
        //Gestion des erreurs serveur
        console.error('Erreur lors de la récupération des listes');
        res.status(500).json({message: 'Erreur serveur lors de la récupération des listes'});
    }
};

//Fonction pour récupérer une liste
export async function getOneList (req, res){
    try{
        const lisId = req.params.id;
        const oneList = await List.findByPk(lisId);
        res.status(200).json(oneList);
    } catch(error){
        console.error('Erreur lors de la récupération de la liste');
        res.status(500).json({message: 'Erreur serveur lors de la récupération de la liste'});
    }
};

//Fonction pour ajouter une nouvelle liste
export async function addList(req, res){
    try{
        const {name}= req.body;
        const newList = await List.create({name});
        res.status(201).json(newList);
    } catch (error) {
        console.error('Erreur lors de la creation de la nouvelle liste');
        res.status(500).json({message : 'Erreur serveur lors de la création de la liste'});
    }
};

//Fonction pour supprimer une liste
export async function removeList (req, res){
    try{
        const listId = req.params.id;
        const list = await List.findByPk(listId);

        if(!list){
            return res.status(404).json({message: 'Liste non trouvée'});
        };
        await list.destroy(listId);
        res.status(204).send();
    } catch(error){
        console.error('Erreur lors de la suppression de la liste');
        res.status(500).json({message: 'Erreur serveur lors de la suppression de la liste'});
    };
};

//Fonction pour modifier une liste