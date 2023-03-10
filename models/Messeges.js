const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        messege: {
            type: String,
            required: [true, "Please provide a messege"],
        }
    },
    {
        timestamps: true
    }
);

const Messeges = mongoose.model('Messeges', messegesSchema);

module.exports = Messeges;