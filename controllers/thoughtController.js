const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts 
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Get a single thought by _id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            res.json(thought);

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' })
            }

            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Post a single thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);

            const user = await User.findOne({_id: req.params.userId})
                .select('-__v');
            
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            user.thoughts.push(thought._id);

            await user.save();
            
            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Delete a single thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId })

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }

            res.json({ message: 'Thought deleted!' });
        } catch (err) {
            res.stats(500).json(err)
        }
    },

    // Updating a single thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.body.thoughtId },
                { $set: req.body },
                { new: true }
            )

            if (!thought) {
                res.status(404).json({ message: 'No user with this id!' })
            }

            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Add a reaction for one of the thoughts
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                {  _id: req.params.thoughtId },
                { $set: req.body },
                { new: true }
            )

            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id' })
            }

            res.json(thought)
        } catch (err) {
            res.status(500).json(err)
        }
    },


    // Remove a reaction for one of the thoughts
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndDelete(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought with this id' })
            }

            res.json(thought)
        } catch (err) {
            res.status(500).json(err);
        }
    }
};