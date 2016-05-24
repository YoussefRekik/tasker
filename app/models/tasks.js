var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TasksSchema = new Schema({
	creator:{type:Schema.Types.ObjectId, ref:'User'},
	content:String,
	created:{type:Date,default:Date.now},
	done:{type:String,default:"false"}
});

module.exports=mongoose.model('Tasks',TasksSchema);