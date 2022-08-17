import mongoose from 'mongoose'

const MessageSchema = new mongoose.Schema(
  {
    ChatId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    text: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

const MessageModel = mongoose.model('message', MessageSchema)
export default MessageModel
