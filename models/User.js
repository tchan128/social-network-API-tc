const { Schema, Types, model } = require('mongoose');
const Thought = require('./Thought');

const userSchema = new Schema(
    {
        userName: {
            type: String,
            required: true, 
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);

userSchema
    .virtual('friendCount')
    // Retrieve length of friend array
    .get(function () {
        return (this.friends).length
    });

const User = model('User', userSchema)

module.exports = User;
