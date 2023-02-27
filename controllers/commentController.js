const Comment = require("../models/Comment");

const createComment = async (req, res) => {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);
  req.body.backgroundColor = color;

  await Comment.create(req.body);
  res.status(201).json({ msg: "Sukses Terkirim" });
};

const getSingleComment = async (req, res) => {
  const { id } = req.params;
  const comment = await Comment.findOne({ _id: id });
  res.status(200).json({ comment });
};

const updateComment = async (req, res) => {
  const { name, text, confirm } = req.body;
  const { id } = req.params;
  const coment = await Comment.findOne({ _id: id });
  coment.name = name;
  coment.text = text;
  coment.confirm = confirm;

  await coment.save();
  res.status(200).json({ msg: "Sukses Terupdate!" });
};

const deleteComment = async (req, res) => {
  const { id } = req.params;
  await Comment.deleteOne({ _id: id });
  res.status(200).json({ msg: "Terhapus!" });
};

const showAttendance = async (req, res) => {
  const coments = await Comment.find({}).populate("balasan");
  let stats = await Comment.aggregate([{ $group: { _id: "$confirm", count: { $sum: 1 } } }]);

  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  const defaultStats = {
    hadir: stats.hadir || 0,
    tidak_hadir: stats.tidak_hadir || 0,
  };
  res.status(200).json({ defaultStats, coments, num: coments.length });
};
module.exports = {
  createComment,
  getSingleComment,
  updateComment,
  deleteComment,
  showAttendance,
};
