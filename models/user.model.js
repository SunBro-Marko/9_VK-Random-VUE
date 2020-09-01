const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  vk_id: { type: String, required: true, unique: true },
  vk_token: { type: String, required: true },
  token_expires_in: { type: String, required: true },
  token_recived_in: { type: String, required: true },
  ruffle: [{ type: Types.ObjectId, ref: "ruffle" }],
});

module.exports = model("User", schema);
