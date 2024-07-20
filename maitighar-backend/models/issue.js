const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const issueSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  department: {
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
  upvotedBy: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: ['open', 'received', 'resolved'],
    default: 'open',
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

issueSchema.set("toJSON", {
 transform: (document, returnedObject) => {
  returnedObject.id = returnedObject._id;
  delete returnedObject._id;
  delete returnedObject.__v;
 }
})

module.exports = mongoose.model('issue', issueSchema);
