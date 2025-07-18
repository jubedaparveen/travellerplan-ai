const mongoose = require('mongoose');

const tripPlanSchema = new mongoose.Schema({
     destination: {
          type: String,
          required: true
     },
     travelMode: {
          type: String,
          required: true
     },
     accommodation: {
          type: String,
          required: true
     },
     activities: [{
          type: String,
          required: true
     }],
     budgetBreakdown: {
          travel: { type: Number, required: true },
          stay: { type: Number, required: true },
          food: { type: Number, required: true },
          activities: { type: Number, required: true },
          total: { type: Number, required: true }
     },
     tripType: {
          type: String,
          required: true
     },
     tripPlanday:[{
          type: String,
          required: true
     }],
     tipsWarnings:[{
          type: String,
          required: true
     }],
     }, 
     {
     timestamps: true
});

const TripPlan = mongoose.model('TripPlan', tripPlanSchema);
module.exports = TripPlan;