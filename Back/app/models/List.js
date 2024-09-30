//Import de Sequelize, de Model et de DataTypes
import {sequelize} from '../database.js';
import { Model, DataTypes } from 'sequelize';

export class List extends Model {}

List.init({
    name:{
        type: DataTypes.STRING(255)
    }
},{
    sequelize,
    tableName: "list",
    timestamps: false,
});