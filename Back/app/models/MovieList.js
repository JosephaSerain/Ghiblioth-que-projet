import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database.js';

export class MovieList extends Model {}

MovieList.init({
    list_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'list',
            key: 'id'
        }
    },
    movie_id:{
        type: DataTypes.INTEGER,
        references:{
            model: 'movie',
            key:'id'
        }
    }
}, {
    sequelize,
    modelName: 'movie_list',
    tableName: 'movie_list',
    timestamps: false
});