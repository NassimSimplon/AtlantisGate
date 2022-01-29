const COMMENT = require("./Model");
 

module.exports = {
  //add_Comment

  addComment: async (req, res) => {
  const image = req.body.image;
  const fullName = req.body.fullName;
  const videoID = req.body.videoID;
  const comment = req.body.comment;
    try {
      const Comment = await new COMMENT({
      image, fullName,videoID,comment
      
      });
      await Comment.save();
      res.json(Comment);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getAllComments

  getAllComments: async (req, res) => {
    try {
      const Comment = await COMMENT.find();
      res.json(Comment);
    } catch (error) {
      console.error(error.message);
    }
  },

  //deleteComment

  deleteComment: async (req, res) => {
    try {
      const Comment = await COMMENT.findByIdAndDelete(req.params.id);
      res.json(Comment);
    } catch (error) {
      console.error(error.message);
    }
  },

  //updateComment

  updateComment: async (req, res) => {
    try {
      const Comment = await COMMENT.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.json(Comment);
    } catch (error) {
      console.error(error.message);
    }
  },

  //getComment

  getComment: async (req, res) => {
    try {
      const Comment = await COMMENT.findById(req.params.id);
      res.json(Comment);
    } catch (error) {
      console.error(error.message);
    }
  },
};