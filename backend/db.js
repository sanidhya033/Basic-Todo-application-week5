const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:GFEXa1a2RP60Ab1g@cluster0.igrmv.mongodb.net/todo-Application");

const todoSchema = mongoose.Schema({
  title:String,
  description:String,
  completed:Boolean
});
const todo =mongoose.model('todos',todoSchema);

module.exports = {
    todo
}