const Post = require('../models/postModel');

exports.createPost = async (req,res) => {
    try{
        const {title,body} = req.body;
        const postCreate = new Post({title,body});
        const create = await postCreate.save();
        res.status(200).json({
            success: true,
            data: create,
            message: 'Created Successfully...',
        })
    }catch(err){
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: "Internal Issues",
        })
    }
}

exports.getPost = async (req,res) => {
    try{
        const getData = await Post.find();
        res.status(200).json({
            success: true,
            data: getData,
            message: 'Success fully Find the data',
        })
    }catch(err){
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: "Internal Issues",
        })
    }
}

exports.getPostId = async (req,res) => {
   try{
    const id = req.params.id;
    const getData = await Post.findById({_id:id});
    if(!getData){
        res.status(402).json({
            success: false,
            data: getData,
            message: "Data Not Found"
        });
    }
    res.status(200).json({
        success: true,
        data: getData,
        message: "Successfully find the data by id"
    });
   }catch(err){
    console.error(err);
    res.status(500).json({
        success: false,
        message: "Internal Issues Face"
    })
   }
}

exports.updatePost = async (req,res) => {
    try{
        const {title,body} = req.body;
        const {id} = req.params;
        const updateData = await Post.findByIdAndUpdate(
            {_id:id},
            {title,body}
        )
        res.status(200).json({
            success: true,
            data: updateData,
            message: 'Updated Message..',
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Interal Error',
        })
    }
}

exports.deletePost = async (req,res) => {
    try{
        const id = req.params.id;
        await Post.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Delete Successfully",
        })
    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: 'Internal Error',
        })
    }
}