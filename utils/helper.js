const bcrypt = require('bcrypt');

module.exports = (app) => {

    app.common = {};

    app.common.comparePassword = (enteredPassword, dbSavedPassword) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(enteredPassword, dbSavedPassword, (err, isMatch) => {
                if (err) reject();
                resolve({ isMatch })
            })
        });
    }

    app.common.generateSalt = (newUser) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) reject();
                    resolve({ hash });
                });
            });
        })
    }

}