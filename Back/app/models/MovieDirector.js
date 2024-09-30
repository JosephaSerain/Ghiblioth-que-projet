//Import sequelize, model et datatypes
import { DataTypes } from 'sequelize';
import { sequelize } from '../database.js';

export const MovieDirector = sequelize.define('MovieDirector',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    movie_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'movie',
            key:'id'
        }
    },
    director_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: 'director',
            key: 'id'
        }
    }
}, {
    tableName: 'movie_director',
    timestamps: false
});