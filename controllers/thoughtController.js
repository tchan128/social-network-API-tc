const { Thought, User } = require('../models');

module.exports = {
    // Get all thoughts 
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
                .select('-__v')
                .populate('reactions');

        res.json(thoughts);

        } catch (err) {
            console.error("Error fetching thoughts:", err);

            res.status(500).json(err)
        }
    },

    // Get a single thought by _id
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
                .select('-__v')
                .populate('reactions');

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' })
            }

            res.json(thought);

        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Post a single thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);

            const user = await User.findOneAndUpdate(
                {_id: req.body.userId},
                { $addToSet: { thoughts: thought } },
                { runValidators: true, new: true }
            );
            
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            }
            
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

            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: {thoughts: req.params.friendId } },
                { runValidators: true, new: true }
            );

            res.json({ message: 'Thought deleted!' });
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Updating a single thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { new: true }
            )

            res.json(thought)

            if (!thought) {
                res.status(404).json({ message: 'No thought with this id!' })
            }

        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Add a reaction for one of the thoughts
    async addReaction(req, res) {
        try {
            const thought = await Thought.findOne(
                { _id: req.params.thoughtId })

            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id' })
            }

            thought.reactions.push({
                reactionBody: req.body.reactionBody,
                userName: req.body.userName
            });

            const updatedThought = await thought.save();

            res.json(updatedThought)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    },

    // Remove a reaction for one of the thoughts
    async removeReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { 'reactions.reactionID': req.body.reactionID },
                { $pull: { reactions: { reactionID: req.body.reactionID } } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                res.status(404).json({ message: 'No reaction with this id' })
            }

            res.json(thought)

        } catch (err) {
            res.status(500).json(err);
        }
    }
};