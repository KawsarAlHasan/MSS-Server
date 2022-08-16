import UserModel from '../Models/userModel.js'
import bcrypt from 'bcrypt'

// Register a new User
export const registerUser = async (req, res) => {
  const { username, password, firstname, lastname } = req.body

  const salt = await bcrypt.genSalt(10)
  const hashedPass = await bcrypt.hash(password, salt)

  const newUser = new UserModel({
    username,
    password: hashedPass,
    firstname,
    lastname,
  })

  try {
    await newUser.save()
    res.status(200).json(newUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
