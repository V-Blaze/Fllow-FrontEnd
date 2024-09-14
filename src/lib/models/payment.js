const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  amount: {
    type: String,
  },
  currency: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.models.Payment || mongoose.model('Payment', paymentSchema);
