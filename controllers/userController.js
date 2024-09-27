const { User } = require('../models');

module.exports = {
  // Get all Users
  async getUsers(req, res) {
    try {
      const Users = await User.find().populate('thoughts');
      res.json(Users); // response will return the users from the db
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single User
  async getSingleUser(req, res) {
    try {
      const User = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      if (!User) {
        return res.status(404).json({ message: 'No User with that ID' })
      }

      res.json(User);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new User
  async createUser(req, res) {
    try {
      const User = await User.create(req.body);
      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Delete a User and remove them from the course
  async deleteUser(req, res) {
    try {
      const User = await User.findOneAndRemove({ _id: req.params.userId });

      if (!User) {
        return res.status(404).json({ message: 'No such User exists' });
      }

      // const course = await Course.findOneAndUpdate(
      //   { Users: req.params.UserId },
      //   { $pull: { Users: req.params.UserId } },
      //   { new: true }
      // );

      // if (!course) {
      //   return res.status(404).json({
      //     message: 'User deleted, but no courses found',
      //   });
      // }

      res.json({ message: 'User successfully deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  // Add an Friend to a User // localhost:3001/api/users/:userId/friends/:friendId
  async addFriend(req, res) {
    console.log('You are adding an Friend');
    console.log(req.body);

    try {
      const User = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!User) {
        return res
          .status(404)
          .json({ message: 'No User found with that ID :(' });
      }

      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Remove Friend from a User
  async removeFriend(req, res) {
    try {
      const User = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: { _id: req.params.friendId } } },
        { runValidators: true, new: true }
      );

      if (!User) {
        return res
          .status(404)
          .json({ message: 'No User found with that ID :(' });
      }

      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
