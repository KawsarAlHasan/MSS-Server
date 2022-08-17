import express from 'express'
import {
  createPost,
  deletePost,
  getPost,
  UpdatePost,
} from '../controllers/PostController.js'

const router = express.Router()

router.post('/', createPost)
router.get('/:id', getPost)
router.put('/:id', UpdatePost)
router.delete('/:id', deletePost)

export default router
