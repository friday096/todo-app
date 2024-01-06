import express from 'express';
import { postController } from '../controller/todoController.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send({ status: 'API is working' });
});

router.post('/create', postController.createPost);
router.get('/get', postController.getPosts);
router.delete('/delete/:id', postController.deletePost);
router.put('/toggle/:id', postController.togglePost);

export default router;
