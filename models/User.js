const { Schema, model, Types } = require('mongoose');
const thoughtSchema = require('./Thought');

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
        thoughts: [thoughtSchema],
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