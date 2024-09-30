//Import sequelize, model et datatypes
import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

//Création d'un model pour associer les films et leur genre (je récupère les infos de la bdd donc l'id, l'id du film et celui du genre)

export const MovieType = sequelize.define('MovieType', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    movie_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'movie',
            key: 'id'
        }
    },
    type_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'types',
            key: 'id'
        }
    }
}, {
    tableName: 'movie_type',
    timestamps: false
});