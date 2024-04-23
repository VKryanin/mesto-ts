const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { UnauthorizedError } = require('../utils/errors/UnauthorizedError');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: 'Пепе',
    },

    email: {
      type: String,
      validate: {
        validator: (mail) => validator.isEmail(mail),
        message: 'Invalid Email',
      },
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      select: false,
    },

    about: {
      type: String,
      minlength: 2,
      maxlength: 30,
      default: 'Легушенок',
    },

    avatar: {
      type: String,
      default: 'https://www.rollingstone.com/wp-content/uploads/2020/07/Screen-Shot-2020-07-15-at-11.24.37-AM.jpg',
      validate: {
        validator: (url) => validator.isURL(url),
        message: 'Invalid URL',
      },
    },
  },
  {
    versionKey: false,
  },
);

// eslint-disable-next-line func-names
userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) return Promise.reject(new UnauthorizedError('Incorrect email or password'));
      return bcrypt
        .compare(password, user.password)
        .then((matched) => {
          if (!matched) return Promise.reject(new UnauthorizedError('Incorrect email or password'));
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
