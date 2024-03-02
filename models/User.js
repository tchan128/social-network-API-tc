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
            // email validator/matchers
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

const User = model('user', userSchema)

module.exports = User;