//Import de Sequelize, de Model et de DataTypes
import {sequelize} from '../database.js';
import { Model, DataTypes } from 'sequelize';

//Export de la class Movie
export class Movie extends Model {}

//On init la class en lui passant les informations que l'on a dans la bdd

Movie.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    date:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    resume:{
        type: DataTypes.TEXT
    },
    bande_annonce:{
        type: DataTypes.STRING(255)
    }



}, {
    //On précise le nom de la table concernée
    sequelize,
    tableName: "movie",
    //On ne veut pas prendre en compte les colonnes created_at et updated_at
    timestamps: false,
});