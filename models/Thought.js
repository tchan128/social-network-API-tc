const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        }, 
        createdAt: {
            type: Date,
            default: Date.now,
            // getter to set date in specific format
        },
        userName: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        }
    }
)

thoughtSchema
    .virtual('reactionCount')
    // Retrieve length of the thought's reaction
    .get(function () {
        return (this.reactions).length
    });

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;