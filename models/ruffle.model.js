const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
  id: {type: String, required: true},
  
  owner: {type: Types.ObjectId, ref: 'user'}
})

module.exports = model('ruffle', schema)
