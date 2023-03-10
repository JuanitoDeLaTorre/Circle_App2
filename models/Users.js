const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
        {
            name: {
                type: String,
                required: [true, "Please enter user name"],
                unique: [true, "User name already exists, choose another"],   
             },
            password: {
                type: String,
                required: [true, "Please enter password"],
            },
            deptartment: { 
                type: String,
                required: [true, "Please enter department"]
            },
            position: {
                type: String,
                required: [true, "Plese enter position"]
            },
            paymentType: {
                type: String,
                required: [true, "Select wage status"]
            }
        },
        {
            timestamps: true
        }
);
const Users = mongoose.model('Users', userSchema);

module.exports = Users;