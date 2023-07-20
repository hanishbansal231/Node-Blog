const Post = require('../models/postModel');
const Comment = require('../models/commentModel');
exports.createComment = async (req, res) => {
    try {
        const { post, user, body } = req.body;
        const CreateComment = new Comment({ 
            post, user, body
         });
        const commentData = await CreateComment.save();
        const updateComment = await Post.findByIdAndUpdate(post, { $push: { comments: commentData._id } }, { new: true })
        .populate("comments")
        .exec();    
        res.json({
            post: updateComment,
        })
    } catch (err) {
        console.error(err);
         return res.status(500).json({
            success: false,
            message: 'Internal Error',
        })
    }
}