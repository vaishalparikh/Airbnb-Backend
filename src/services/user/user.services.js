const { UserModel } = require('../../models');

const getUserByEmail = async ({ email }) => UserModel.findOne({ email });

const addUser = async ({
  email, password, fullName, OTP,
}) => UserModel.create({
  email,
  password,
  fullName,
  OTP,
});

module.exports = {
  getUserByEmail,
  addUser,
};
