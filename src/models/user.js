import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  mobilephone: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: false
  },
  sex: {
    type: String,
    default: 2
  },
  salt: {
    type: String,
    unique: true
  },
  hash: {
    type: String,
    unique: true
  }
});

const User = mongoose.model('user', UserSchema);

export default User;
