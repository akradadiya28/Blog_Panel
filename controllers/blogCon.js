const blogModel = require('../models/blogModel');
const commentModel = require('../models/commentModel');
const blogCommentModel = require('../models/commentModel');

const blog = async (req, res) => {

    let blogData = await blogModel.find();
    // console.log("blogData", blogData);


    res.render('blog', { userImg: req.user.path, fname: req.user.fname, lname: req.user.lname, email: req.user.email, blogData: blogData });

}

const blogComment = async (req, res) => {

    try {

        console.log("req.body", req.body);

        const blogCommentData = new blogCommentModel({
            comment: req.body.comment,
            user: req.user._id,
            blog: req.body._id
        })

        const blogComment = await blogCommentData.save();
        console.log("blogComment", blogComment);

        const comment = await commentModel.find({ path: 'blog' }).populate('user');

        console.log("blog", comment);

        res.redirect('/blog');

    } catch (error) {
        console.log("error", error);

    }

}


const myblog = async (req, res) => {

    let blogData = await blogModel.find({ user_id: req.user._id });
    // console.log("blogData", blogData);

    res.render('myblog', { userImg: req.user.path, fname: req.user.fname, lname: req.user.lname, email: req.user.email, blogData: blogData });
}

module.exports = { blog, blogComment, myblog };