const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mini extends Model { }

Mini.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        movement: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        toughness: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        save: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wounds: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        leadership: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        objective: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ballistic: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weapon: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        army_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'army',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Mini',
    }
);

module.exports = Mini;