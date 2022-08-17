import express from 'express'
import {
  createPost,
  getPost,
  UpdatePost,
} from '../controllers/PostController.js'

const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', UpdatePost)

export default router
