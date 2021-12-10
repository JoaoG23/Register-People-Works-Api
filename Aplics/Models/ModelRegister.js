const mongoose = require('mongoose');

const registerPeopleSchema = new mongoose.Schema({
yourName: {type:String  , required:true },
age: { type:Number , default: 0 },
identity: { type:Number , required:true },
weight: { type:Number },
size: { type:Number , default: 0 },
profession: { type:String , default: 'No job' },
nationality: { type:String , default: 'Brazilian' , required:true },
street: { type:String },
city: { type:String },
country: { type:String , default: 'Brazil' }
});

module.exports = mongoose.model('People', registerPeopleSchema);

// yourName: {type:String  , required:true },
// age: { type:Number , default: 0 },
// identity: { type:Number , required:true },
// weight: { type:Number },
// size: { type:Number , default: 0 },
// profession: { type:String , default: 'No job' },
// nationality: { type:String , default: 'Brazilian' , required:true },
// street: { type:String },
// city: { type:String },
// country: { type:String , default: 'Brazil' }
