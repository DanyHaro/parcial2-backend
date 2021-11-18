import { Router } from 'express'

const router = Router();
const { checkToken } = require('../auth/tokenValidation');
import * as posts from '../controller/posts.controller'

router.get('/posts', posts.getAllPosts);
router.get('/:id', posts.getPost);
router.post('/', posts.createPost);
router.delete('/:id', posts.deletePost);
router.put('/:id',posts.updatePost);

import * as usuario from '../controller/usuario.controller'
router.post('/signin',usuario.signIn);


export default router;
