import mongoose from 'mongoose'

const postSchema = mongoose.Model(
  {
    userId: { type: String, required: true },
    desc: String,
    likes: [],
    image: String,
  },
  {
    timeStamps: true,
  },
)
