const mongoose = require('mongoose')

const seshSchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
    trim: true
  },
  amount: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Sesh = mongoose.model('Sesh', seshSchema)

module.exports = Sesh
