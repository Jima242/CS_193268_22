import { getData } from './db.js';
import { DataTypes } from 'sequelize';


const Son = getData.sequelizeClient.define ('cat_sons',{
    id: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastNamef:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastNamem: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    age: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export const getSon = Son;