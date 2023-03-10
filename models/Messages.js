const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            default: 'Anonymous'
        },
        message: {
            type: String,
            required: [true, "Please provide a messege"],
        }
    },
    {
        timestamps: true
    }
);

const Messages = mongoose.model('Messages', messagesSchema);

module.exports = Messages;