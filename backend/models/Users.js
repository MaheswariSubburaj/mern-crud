import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let usersSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  token: {
    type: String
  }
}, {
  collection: 'users'
})

export default mongoose.model('Users', usersSchema)