const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find()
                .select('-__v -id')
                .populate('thoughts')
                .populate('friends');
                
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Get one user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({_id: req.params.userId})
                .select('-__v -id')
                .populate('thoughts')
                .populate('friends');
            
            if (!user) {
                res.status(404).json({ message: 'No user with that ID' });
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
            res.status(500).json(err);
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
            if ((user.thoughts).length > 1) {
                await Thought.deleteMany({ _id: { $in: user.thoughts } })
            }

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

    // Adding a new friend to user friend list 

    async addFriend(req, res) {
        console.log('You are adding a friend');
        console.log(req.body);

        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

        if (!user) {
            res.status(404).json({ message: 'No user found with this ID' })
        }

        res.json(user);
        } catch (err) {
            res.status(500).json(err)
        }
    },

    // Removing a new friend to user friend list

    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: {friends: req.params.friendId } },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'No user found with that ID :(' });
              }
        
              res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
