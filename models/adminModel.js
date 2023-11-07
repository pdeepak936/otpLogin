const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  otp: Number,
  phoneNumber: {
    type: String,
    unique: true,
  },
  role: {
    type: String,
    default: 'admin'
  },
  ip: String,
  os: String,
  referrerCode: {
    type: String,
    unique: true,
  },
});

const AdminModel = mongoose.model('Admin', adminSchema);

module.exports = AdminModel;
