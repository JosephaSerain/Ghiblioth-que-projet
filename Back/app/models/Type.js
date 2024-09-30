//Import de Sequelize, de Model et de DataTypes
import {sequelize} from '../database.js';
import { Model, DataTypes } from 'sequelize';

export class Type extends Model {}

Type.init({
    name:{
        type: DataTypes.STRING(255)
    }

}, {
    sequelize,
    tableName: "type",
    timestamps: false,

});