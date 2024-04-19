const expressAsyncHandler = require("express-async-handler");
const {
  postModel,
  validationcreatepost,
  validationPutpost,
} = require("../mudels/postModel"); // تصحيح في اسم المجلد models
const bcrypt = require("bcryptjs"); // تصحيح في استدعاء مكتبة bcrypt
const router = require("express").Router(); // تصحيح في استدعاء الدالة Router()
let path = require("path");
const { aploudtoCloud, DeletCloud } = require("../medelweres/cloudenry");

let fs = require("fs");
const { verfiyToken } = require("../medelweres/tokenmedelweres");
let storage = require("../medelweres/uploudImg");
const { isValidObjectId } = require("mongoose");
const validateObjectId = require("../medelweres/validateObjectId");
const { commentModel } = require("../mudels/commentModel");

router.post(
  "/createPost",
  verfiyToken,
  storage.single("img"),
  expressAsyncHandler(async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "not file provied" });
    }

    let { error } = validationcreatepost(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message }); // استخدام return للخروج من الدالة
    }

    let pathimg = path.join(__dirname, `../images/${req.file.filename}`);

    let result = await aploudtoCloud(pathimg);

    let post = await postModel.create({
      title: req.body.title,
      description: req.body.description,
      caticory: req.body.caticory,
      user: req.user.id,
      image: {
        url: result.secure_url,
        publicId: result.public_id,
      },
    });

    res.status(200).json(post);

    fs.unlinkSync(pathimg);
  })
);

router.get(
  "/getPost/:id",
  validateObjectId,
  expressAsyncHandler(async (req, res) => {
    let post = await postModel
      .findById(req.params.id)
      .populate("user", ["-password"])
      .populate("Comments");
    if (!post) {
      return res.status(400).json({ message: "post not found " });
    }
    res.status(200).json(post);
  })
);
router.delete(
  "/deletePost/:id",
  validateObjectId,
  verfiyToken,
  expressAsyncHandler(async (req, res) => {
    let post = await postModel.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ message: "post not found " });
    }
    if (req.user.isAdmin || req.user.id == post.user.toString()) {
      await postModel.findByIdAndDelete(req.params.id);
      await DeletCloud(post.image.publicId);
      await commentModel.deleteMany({postId : post._id});
      res.status(200).json({
        message: "post deleted",
        postId: post._id,
      });
    } else {
      return res.status(400).json({ message: "not authorized" });
    }
  })
);
router.put(
  "/updatePost/:id",
  validateObjectId,
  verfiyToken,
  expressAsyncHandler(async (req, res) => {
    let { error } = validationPutpost(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message }); // استخدام return للخروج من الدالة
    }

    let post = await postModel.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ message: "post not found " });
    }

    if (req.user.id !== post.user.toString()) {
      return res.status(400).json({ message: "not authorized" });
    }
    let new_post = await postModel
      .findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            title: req.body.title,
            description: req.body.description,
            caticory: req.body.caticory,
          },
        },
        { new: true }
      )
      .populate("user", ["-password"]);
    res.status(200).json(new_post);
  })
);
router.put(
  "/updatePostImage/:id",
  validateObjectId,
  verfiyToken,
  storage.single("img"),
  expressAsyncHandler(async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "no file" });
    }

    let post = await postModel.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ message: "post not found " });
    }

    if (req.user.id !== post.user.toString()) {
      return res.status(400).json({ message: "not authorized" });
    }
    await DeletCloud(post.image.publicId);

    let pathImage = path.join(__dirname, `../images/${req.file.filename}`);
    let result = await aploudtoCloud(pathImage);
    let new_post = await postModel
      .findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            image: {
              url: result.secure_url,
              publicId: result.public_id,
            },
          },
        },
        { new: true }
      )
      .populate("user", ["-password"]);
    res.status(200).json(new_post);

    fs.unlinkSync(pathImage);
  })
);

router.get(
  "/getAllPosts",
  expressAsyncHandler(async (req, res) => {
    let { pageNumber, caticory } = req.query;
    let limit = 3;
    let posts;
    if (caticory) {
      posts = await postModel
        .find({ caticory })
        .sort({ createdAt: -1 })
        .populate("user", ["-password"])
        .populate("Comments");
    } else if (pageNumber) {
      posts = await postModel
        .find()
        .limit(limit)
        .skip((pageNumber - 1) * limit)
        .sort({ createdAt: -1 })
        .populate("user", ["-password"])
        .populate("Comments");

    } else {
      posts = await postModel
        .find()
        
        .sort({ createdAt: -1 })
        .populate("user", ["-password"])
        .populate("Comments");
    }
    res.status(200).json(posts);
  })
);

router.put(
  "/likes/:id",
  validateObjectId,
  verfiyToken,
  expressAsyncHandler(async (req, res) => {
    let post = await postModel.findById(req.params.id);
    if (!post) {
      return res.status(400).json({ message: "post not found " });
    }

    let postfind = post.likes.some((user) => user.toString() === req.user.id);

    console.log(postfind);
     
   

    if (postfind) {
      console.log("pull");
      post = await postModel.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { likes: req.user.id },
        },
        { new: true }
      );
    } else {
      console.log("push");

      post = await postModel.findByIdAndUpdate(
        req.params.id,
        {
          $push: { likes: req.user.id },
        },
        { new: true }
      );
    }
    res.status(200).json(post);
  })
);

module.exports = router; // تصحيح في تصدير الراوتر
