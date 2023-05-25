"use strict";
const {Model}= require("sequelize"
)

/** @type {import('sequelize-cli').Migration} */
module.exports = (DataTypes, sequelize)=>{
    class User extends Model {
        static associate (models){
            User.hasMany(models.Post, {foreignkey: "userId"});
        }
        }
    
 User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {sequelize,
    modelCalled: 'User',
  });

return User;