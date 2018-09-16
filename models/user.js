module.exports = function (app, mongoose) {

    const userSchema = new mongoose.Schema({
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
    })

    app.db.model('User', userSchema);
}

