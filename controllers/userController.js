const { User, Thought } = require('../models')

// Single users 
// Add users
// Update user
// Delete user 
// BONUS: Remove a user's associated thoughts when deleted.

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get one user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId})
                .select('-__v');
            
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }

            res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user)
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },

    // Deleting a user & associating thoughts
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: 'No user with that ID' });
            }

            // Delete associating thoughts
            await Thought.deleteMany({ _id: { $in: user.thoughts } })
            res.json({ message: 'User and thoughts deleted!' });
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Updating a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'No user with this id!' })
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    },
};