const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  tour: { type: mongoose.Schema.Types.ObjectId, ref: 'Tour', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  travelDate: { type: Date, required: true },
  adults: { type: Number, required: true },
  children: { type: Number, default: 0 },
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Cancelled'], default: 'Pending' },
  paymentStatus: { type: String, enum: ['Unpaid', 'Partial', 'Paid'], default: 'Unpaid' },
  paymentMethod: { type: String },
  bookingRef: { type: String },
  contactInfo: {
    name: String,
    email: String,
    phone: String
  },
  specialRequests: { type: String }
}, { timestamps: true });

bookingSchema.pre('save', function(next) {
  if (!this.bookingRef) {
    this.bookingRef = 'BR-' + Math.random().toString(36).substr(2, 8).toUpperCase();
  }
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
