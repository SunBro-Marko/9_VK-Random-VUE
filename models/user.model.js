const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  vk_id: { type: String, required: true, unique: true },
  vk_token: { type: String, required: true },
  token_expires_in: { type: Number, required: true },
  token_recived_in: { type: Number, required: true },
  ruffle: [{ type: Types.ObjectId, ref: "ruffle" }],
});


module.exports = model("User", schema);


module.exports.findOrCreate = function (profile,params, done) {
  var userObj = new this({
      vk_id:profile.id,
      vk_token: params.access_token,
      token_expires_in: params.expires_in,
      token_recived_in: 123,      
  });

  console.log(userObj)
  
  this.findOne({ vk_id: profile.id }, (err, result) => {
    if (!result) {
      userObj.save(done);
    } else {
      done(null, result);
    }
  });
};