exports.dummyRouter = (req,res) => {
    res.send("Hello Guys");
}
 const Post = require('../models/postModel');
 const Comment = require('../models/commentModel');
exports.createComment = async (req,res) => {
    try{

    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal Error',
        })
    }
}