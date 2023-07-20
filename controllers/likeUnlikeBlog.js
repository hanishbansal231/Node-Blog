const Post = require('../models/postModel');
const Like = require('../models/likeModel');

exports.likePost = async (req,res) => {
    try{
        const {post,like} = req.body;
        const likes = new Like({
            post,like
        })
        const createLikes = await likes.save();
        const updateLikes = await Post.findByIdAndUpdate(post,{$push: {likes: createLikes._id}}, {new: true})
        .populate("likes")
        .exec();
        res.json({
            post:updateLikes,
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal Error',
        })
    }
}