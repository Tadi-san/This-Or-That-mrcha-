const mongoose =  require('mongoose')
const {Schema} = mongoose

const catSchema = new mongoose.Schema({
   
    newCategory:String,
    discription:String,
    
});

const catModel = mongoose.model('Cat', catSchema)

module.exports = catModel