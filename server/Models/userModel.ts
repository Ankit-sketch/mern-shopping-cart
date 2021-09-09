import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
 password: {
    type: String,
    required: [true, "Please add your password"],
    trim: true
  },
  avatar: {
    type: String,
    default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
  },
  role: {
    type: String,
    default: 'user' // admin
  },
}, {
  timestamps: true
})

export default mongoose.model('User', userSchema)