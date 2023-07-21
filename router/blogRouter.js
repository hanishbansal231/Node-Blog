const express = require('express');
const router = express.Router();
const {createPost,getPost,getPostId,updatePost,deletePost} = require('../controllers/createPostBlog');
const {createComment} = require('../controllers/commentBlog');
const {likePost,unLikePost} = require('../controllers/likeUnlikeBlog');


router.post('/createPost',createPost);
router.get('/getPost',getPost);
router.get('/getPost/:id',getPostId);
router.put('/updatePost/:id',updatePost);
router.delete('/deletePost/:id',deletePost);
router.post('/createComment',createComment);
router.post('/likePost',likePost);
router.post('/unLikePost',unLikePost);

module.exports = router;