const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  destination: { type: String, required: true },
  country: { type: String, required: true },
  duration: {
    days: { type: Number, required: true },
    nights: { type: Number, required: true }
  },
  price: {
    adult: { type: Number, required: true },
    child: { type: Number, required: true },
    currency: { type: String, default: 'USD' }
  },
  maxGroupSize: { type: Number, required: true },
  difficulty: { type: String, enum: ['Easy', 'Moderate', 'Challenging'], default: 'Easy' },
  category: { type: String },
  inclusions: [{ type: String }],
  exclusions: [{ type: String }],
  itinerary: [{
    day: Number,
    title: String,
    description: String,
    accommodation: String
  }],
  coverImage: { type: String },
  images: [{ type: String }],
  startDates: [{ type: Date }],
  availableSlots: { type: Number },
  rating: { type: Number, default: 0 },
  ratingsCount: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  status: { type: String, enum: ['Active', 'Inactive', 'Sold Out'], default: 'Active' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Tour', tourSchema);
