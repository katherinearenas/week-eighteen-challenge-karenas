const { Schema, model } = require('mongoose');
const thoughtSchema = require('./Thought');

// Schema to create Student model
const userSchema = new Schema(
  {
    // _id
    username: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      max_length: 50,
    },
    thoughts:[
      {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
      }
    ],
    friends:[
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    },
  {
    toJSON: {
      getters: true,
    },
  }
);
// This technically is not saved, but it is displayed when we do a GET on the user
userSchema.virtual('friendCount').get(function() {
  return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;
