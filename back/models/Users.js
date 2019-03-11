const express = require('express');
const passport = require('passport');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/userMovie', {logging: false})

var Users = db.define('users', {
    name:{
        type: Sequelize.TEXT,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        isEmail: true,
        allowNull: false,
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
        get() {
            return crypto.createHmac('sha1', salt).update(password).digest('hex');
          }
    },

    salt: {
        type: Sequelize.STRING,
        isNull: false,
        set() {
            return crypto.randomBytes(20).toString('hex')
        }
    }
           
});

Users.prototype.Salts = function(){  
    return paswordSalts
}

module.exports = {
    Users,
    db,
}