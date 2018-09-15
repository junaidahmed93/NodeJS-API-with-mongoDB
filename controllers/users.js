module.exports = (app) => {
    app.api.User = {}

    app.api.User.Signup = (req, res) => {
        var newuser = new app.db.models.User({ fullName: 'Bill' });
        newuser.save((err, data) => {
            console.log('err', err);
            console.log('data', data);
        })
    }
}