const sequenlize=require('sequelize');
const mysql=new sequenlize('nodesql','root','Sagar!@#123',{
    host:'localhost',
    dialect:'mysql'
})
module.exports=mysql;