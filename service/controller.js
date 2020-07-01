'use strict';

var response = require('./result');
var connection = require('./connection');

exports.index = function(req, res) {
    //response.ok("Hello from the Node JS RESTful side!", res)
    response.fail("Not Found", res, 404)
};

exports.users = function(req, res) {
    connection.query('SELECT * FROM users', function (error, rows, fields){
        if(error){
            //console.log(error)
            response.fail("Unable to load user", res, 403)
        } else{
            response.ok(rows, res)
        }
    });
};

function checkIsEmailUsed(email) {
    console.log("checkIsEmailUsed");
    let result = false;
    return new Promise(resolve => {
        connection.query('SELECT `id` FROM `users` WHERE `email` = ?',
        [ email ],
        function (error, rows, fields){
            if (rows.length === 0) {
                console.log("email not used");
                resolve(false);
            } else {
                console.log("email used");
                resolve(true);
            }
        });
    })
}

function checkIsMobileUsed(mobile) {
    console.log("checkIsEmailUsed");
    let result = false;
    return new Promise(resolve => {
        connection.query('SELECT `id` FROM `users` WHERE `mobile` = ?',
        [ mobile ],
        function (error, rows, fields){
            if (rows.length === 0) {
                console.log("mobile not used");
                resolve(false);
            } else {
                console.log("mobile used");
                resolve(true);
            }
        });
    })
}

exports.createUser = async function(req, res) {
    
    var user_mobile = req.body.mobile;
    var user_firstname = req.body.firstname;
    var user_lastname = req.body.lastname;
    var user_dob = req.body.dob ?? null;
    var user_gender = req.body.gender ?? null;
    var user_email = req.body.email;

    console.log("will call checkIsEmailUsed");

    let emailAlreadyUsed = await checkIsEmailUsed(user_email);
    let mobileAlreadyUsed = await checkIsMobileUsed(user_mobile);
    if (emailAlreadyUsed) {
        response.fail("Email already used", res, 403)
    } else if (mobileAlreadyUsed) {
        response.fail("Mobile already used", res, 403)
    } else {
        connection.query('INSERT INTO users (mobile, firstname, lastname, dob, gender, email) values (?, ?, ?, ?, ?, ?)',
        [ user_mobile, user_firstname, user_lastname, user_dob, user_gender, user_email ], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.ok("User created", res)
            }
        });
    }

};