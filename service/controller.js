'use strict';

var response = require('./result');
var connection = require('./connection');

exports.index = function(req, res) {
    response.fail("Not Found", res, 404)
};

exports.users = function(req, res) {
    connection.query('SELECT * FROM users', function (error, rows, fields){
        if(error){
            response.fail("Unable to load user", res, 403)
        } else{
            response.ok(rows, res)
        }
    });
};

function checkIsEmailUsed(email) {
    let result = false;
    return new Promise(resolve => {
        connection.query('SELECT `id` FROM `users` WHERE `email` = ?',
        [ email ],
        function (error, rows, fields){
            if (rows.length === 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    })
}

function checkIsMobileUsed(mobile) {
    let result = false;
    return new Promise(resolve => {
        connection.query('SELECT `id` FROM `users` WHERE `mobile` = ?',
        [ mobile ],
        function (error, rows, fields){
            if (rows.length === 0) {
                resolve(false);
            } else {
                resolve(true);
            }
        });
    })
}

exports.createUser = async function(req, res) {
    
    var user_mobile = req.body.mobile;
    var user_firstname = req.body.firstname;
    var user_lastname = req.body.lastname;
    var user_dob = req.body.birthday ?? null;
    var user_gender = req.body.gender ?? null;
    var user_email = req.body.email;

    var errors = [];
    if (!user_mobile) {
        errors.push({message: "Mobile cannot be empty"})
    }
    if (!user_firstname) {
        errors.push({message: "Firstname cannot be empty"})
    }
    if (!user_lastname) {
        errors.push({message: "Lastname cannot be empty"})
    }
    if (!user_email) {
        errors.push({message: "Email cannot be empty"})
    }

    let emailAlreadyUsed = await checkIsEmailUsed(user_email);
    let mobileAlreadyUsed = await checkIsMobileUsed(user_mobile);
    if (mobileAlreadyUsed) {
        errors.push({message: `Mobile number ${user_mobile} already used`})
    } 
    if (emailAlreadyUsed) {
        errors.push({message: `Email ${user_email} already used`})
    }     
    
    if (errors.length > 0) {
        response.fail(errors, res, 403);
    } else {
        connection.query('INSERT INTO users (mobile, firstname, lastname, dob, gender, email) values (?, ?, ?, ?, ?, ?)',
        [ user_mobile, user_firstname, user_lastname, user_dob, user_gender, user_email ], 
        function (error, rows, fields){
            if(error){
                response.fail([{message: "Unable to save. Please check your data and try again."}], res, 403);
            } else {
                response.ok("User created", res)
            }
        });
    }

};