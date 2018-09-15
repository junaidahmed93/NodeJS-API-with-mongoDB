module.exports = (app, jwt) => {
    app.api.User = {}

    app.api.User.signup = (req, res) => {
        let user = {
            email: req.body.email,
            password: req.body.password,
            firstName: req.body.firstName,
        }
        app.common.generateSalt(user).then(success => {
            user.password = success.hash;
            var newuser = new app.db.models.User(user);
            newuser.save((err, data) => {
                console.log('err', err);
                console.log('data', data);
            })
        }).catch(error => {
            console.log('error', error);

        });

    }

    app.api.User.login = (req, res) => {
        console.log('req.body', req.body);
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        app.db.models.User.findOne({ email: user.email }, (err, record) => {
            console.log('32', err);
            console.log('33', record);
            if (err) res.json({ error: 'Server error' });
            else if (record) {
                app.common.comparePassword(user.password, record.password).then(success => {
                    console.log('line 38',success)
                    const token = jwt.sign(user, '#h@12', {
                        expiresIn: 604800
                    });

                    res.json({
                        success: true,
                        toke: 'JWT ' + token,
                        record,
                    })
                })
                    .catch(error => {
                        console.log('line 50', error)
                        res.json({
                            error: 'Wrong password'
                        })
                    })
            }
            else {
                res.json({
                    error: 'No user found',
                })
            }
        })


    }

    app.api.User.Profile = (req, res) => {
        res.json({
            user: 'Mil gya'
        })
    }

    app.api.User.History = (req, res) => {
        res.json({
            user: 'History'
        })
    }
}