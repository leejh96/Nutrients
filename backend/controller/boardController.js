const boardModel = require("../models/board");
const boardController = {
  create: async (req, res) => {
    const { title, text, image } = req.body;
    const post = new boardModel({
      title,
      text,
      image,
    });

    try {
      const postData = await post.save();
      res.status(200).json({
        message: "게시물 생성 완료",
        post: postData,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },
  getAll: async (req, res) => {
    try {
      const posts = await boardModel.find().populate("writer");
      res.status(200).json({
        message: "데이터 조회 성공",
        posts,
      });
    } catch (error) {
      res.status(500).json({
        message: "DB 서버 에러",
      });
    }
  },

  getOne: (req, res) => {},

  update: (req, res) => {},

  delete: (req, res) => {},
};

module.exports = boardController;
