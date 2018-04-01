var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var toDoSchema = new Schema({
  todo: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  created: {
    type: Date,
    default: Date.now
  },
  due: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('todo', toDoSchema)
