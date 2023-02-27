const router = require("express").Router();
const { createComment, showAttendance, getSingleComment, updateComment, deleteComment } = require("../controllers/commentController");

router.route("/").post(createComment).get(showAttendance);
router.route("/:id").get(getSingleComment).put(updateComment).delete(deleteComment);

module.exports = router;
