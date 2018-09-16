module.exports = (app, jwt) => {
    app.api.User = {}

    app.api.User.signup = (req, res) => {
        if (!req.body || JSON.stringify(req.body) === '{}') {
            res.status(400).send({
                success: false,
                message: "Request body can not be empty"
            });
        }
        else {
            if (!app.validationMethods.validateEmail(req.body.email)) {
                res.status(400).send({
                    success: false,
                    message: "Invalid parameter for user email in request."
                });
            }
            else if (!req.body.password) {
                res.status(400).send({
                    success: false,
                    message: "Password field required"
                });
            }
            else if (!req.body.firstName) {
                res.status(400).send({
                    success: false,
                    message: "First name can not be empty"
                });
            }
            else if (!req.body.lastName) {
                res.status(400).send({
                    success: false,
                    message: "Last name can not be empty"
                });
            }
            else {
                let user = {
                    email: req.body.email,
                    password: req.body.password,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                }
                app.common.generateSalt(user).then(success => {
                    user.password = success.hash;
                    var newuser = new app.db.models.User(user);
                    newuser.save((err, data) => {
                        if (err) {
                            if (err && err.code === 11000) {
                                res.send({
                                    success: false,
                                    error: 'User already registered with provided email'
                                })
                            }
                        } else {
                            res.send({
                                success: true,
                                message: 'Successfully signup'
                            })
                        }
                    })
                }).catch(error => {
                    res.send({
                        success: false,
                        error: 'Something went wrong'
                    });
                });
            }
        }
    }

    app.api.User.login = (req, res) => {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        app.db.models.User.findOne({ email: user.email }, (err, record) => {
            if (err) res.json({ error: 'Server error' });
            else if (record) {
                app.common.comparePassword(user.password, record.password).then(success => {
                    const token = jwt.sign(user, app.constants.JWT_Secret, {
                        expiresIn: 604800
                    });
                    let authUser = {
                        email: record.email,
                        firstName: record.firstName
                    }
                    res.send({
                        success: true,
                        token: 'JWT ' + token,
                        authUser,
                    })
                })
                    .catch(error => {
                        res.send({
                            error: 'Wrong password'
                        })
                    })
            }
            else {
                res.send({
                    error: 'No user found',
                })
            }
        })


    }

    app.api.User.Profile = (req, res) => {
        res.json({
            user: 'Authenticated'
        })
    }

    app.api.User.History = (req, res) => {
        res.json({
            user: 'History'
        })
    }
}