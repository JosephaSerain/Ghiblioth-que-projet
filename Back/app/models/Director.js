//Import de Sequelize, de Model et de DataTypes
import {sequelize} from '../database.js';
import { Model, DataTypes } from 'sequelize';

export class Director extends Model{}

Director.init({
    name:{
        type: DataTypes.STRING(255)
    }
}, {
    sequelize,
    tableName: "director",
    timestamps: false,

});