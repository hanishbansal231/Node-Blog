const express = require('express');
const router = express.Router();
const {dummyRouter} = require('../controllers/commentBlog');
const {createPost,getPost,getPostId,updatePost,deletePost} = require('../controllers/createPostBlog');

router.get('/dummy',dummyRouter);
router.post('/createPost',createPost);
router.get('/getPost',getPost);
router.get('/getPost/:id',getPostId);
router.put('/updatePost/:id',updatePost);
router.delete('/deletePost/:id',deletePost);

module.exports = router;