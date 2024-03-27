const mongoose =  require('mongoose')
const {Schema} = mongoose

const tempSchema = new mongoose.Schema({
   
    option1: String,
    option2:String,
    category:String,
    votes:[String],
    option1_vote:Number,
    option2_vote:Number,
    
});

const tempModel = mongoose.model('Temp', tempSchema)

module.exports = tempModel