const {sequelize}=require("../../config/mysql");
const {DataTypes}=require("sequelize");
const Storage=require("./storage")

const Tracks=sequelize.define(
"tracks",
{
    name: {
        type:DataTypes.STRING,
    },
    album: {
        type:DataTypes.STRING,
    },
    cover: {
        type:DataTypes.STRING,
    },
    artist_name: {
        type:DataTypes.STRING,
    },
    artist_nickname: {
        type:DataTypes.STRING,
     },
     artist_nationality: {
        type:DataTypes.STRING,
    },
    
    duration_start: {
        type:DataTypes.INTEGER,
    },
    duration_end: {
        type:DataTypes.INTEGER,
    },
   
    mediaId: {
        type:DataTypes.INTEGER,
    },
}, {
    timestamps:true,
    }

);

/**
 * Implementando modelo personalizado
 */
Tracks.findAllData=function(){
    Tracks.belongsTo(Storage,{
        foreignKey:"mediaId",
    })
    return Tracks.findAll({include:Storage})
};
module.exports=Tracks; 