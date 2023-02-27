const router = require("express").Router();
const { createReplyComment, getSingleReply, updateReply, deleteReply } = require("../controllers/replyControllers");

router.route("/createReply").post(createReplyComment);
router.route("/:id").get(getSingleReply).put(updateReply).delete(deleteReply);

module.exports = router;
