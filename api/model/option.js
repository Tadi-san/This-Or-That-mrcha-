const mongoose =  require('mongoose')
const {Schema} = mongoose

const optionSchema = new mongoose.Schema({
   
    option1: String,
    option2:String,
    category:String,
    votes:[String],
    option1_vote:Number,
    option2_vote:Number,
    
});

const optionModel = mongoose.model('Option', optionSchema)

module.exports = optionModel