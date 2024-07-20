const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const suggestionSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
    latitude: {
    type: Number,
    required: true,
    },
    longitude: {
    type: Number,
    required: true,
    },
  upvotes: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['open', 'recieved', 'resolved'],
    default: 'open',
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

suggestionSchema.set("toJSON", {
  transform: (document, returnedObject) => {
   returnedObject.id = returnedObject._id;
   delete returnedObject._id;
   delete returnedObject.__v;
  }
 })

module.exports = mongoose.model('Suggestion', suggestionSchema);
