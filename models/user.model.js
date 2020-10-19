const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  vk_id: { type: String, required: true, unique: true },
  vk_displayName: { type: String, required: true },
  vk_photo: { type: String, required: true },
  vk_profileUrl: { type: String, required: true },
  vk_token: { type: String, required: true },
  token_expires_in: { type: Number, required: true },
  token_recived_in: { type: Number, required: true },
  ruffle: {
    post:{type:Object},
    reposts:{type:Array},  
    blacklist:{type:Array},
    winners:{type:Array}
  },
})


module.exports = model("User", schema);
