const { Schema, model, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        userName: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
});

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
    .get(function () {
        return (this.reactions).length
    });

thoughtSchema
    .virtual('timeFormat')
    .get(function (){
        return this.createdAt.toLocaleString('en-US',{
            month: 'short', 
            day: 'numeric', 
            year: 'numeric', 
            hour: 'numeric', 
            minute: '2-digit', 
        });
    });

reactionSchema
    .virtual('timeFormat')
    .get(function (){
        return this.createdAt.toLocaleString('en-US',{
            month: 'short', 
            day: 'numeric', 
            year: 'numeric', 
            hour: 'numeric', 
            minute: '2-digit', 
        });
    });

const Thought = model('Thought', thoughtSchema)

module.exports = Thought;