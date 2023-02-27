const Reply = require("../models/Reply");

const createReplyComment = async (req, res) => {
  let hex = Math.floor(Math.random() * 0xffffff);
  let color = "#" + hex.toString(16);
  req.body.backgroundColor = color;
  await Reply.create(req.body);
  res.status(201).json({ msg: "sukses terkirim" });
};
const getSingleReply = async (req, res) => {
  const { id } = req.params;
  const reply = await Reply.findOne({ _id: id });
  res.status(200).json({ reply });
};

const updateReply = async (req, res) => {
  const { name, text, confirm } = req.body;
  const { id } = req.params;
  const reply = await Reply.findOne({ _id: id });
  reply.name = name;
  reply.text = text;
  reply.confirm = confirm;

  await reply.save();
  res.status(200).json({ msg: "sukses terupdate!" });
};

const deleteReply = async (req, res) => {
  const { id } = req.params;
  await Reply.deleteOne({ _id: id });
  res.status(200).json({ msg: "terhapus!" });
};

module.exports = {
  createReplyComment,
  getSingleReply,
  updateReply,
  deleteReply,
};
