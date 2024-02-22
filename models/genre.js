const mongoose = require("mongoose");

const Genre = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 100,
    }
})

Genre.virtual("url").get(function () {
    return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", Genre);