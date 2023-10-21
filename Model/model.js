const Sequelize  = require('sequelize');
const sequenlize=require('../util/database');
const Library=sequenlize.define('library',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    bookname:{
        type:Sequelize.STRING,
        allowNull:false,
   
    },
    currentdate:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    returndate:{
        type:Sequelize.STRING,
        allowNull:false,
        
    },
    fine:{
        type:Sequelize.INTEGER,
    }

})
module.exports=Library;