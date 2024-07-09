const  express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config();
const mongoose = require("mongoose")
const MongoClient = require('mongodb').MongoClient
const Option = require('./model/option')
const Temp = require('./model/temp_option')
const Cat = require('./model/cat')
const port = 5000
const Token = "5661492994:AAFzR7wUzKRACk868fATeoCV3doJzGshsFY"
const webUrl = "https://this-or-that-mrcha-za9t.vercel.app"
const { Telegraf , Markup} = require('telegraf')



const bot = new Telegraf(Token);

bot.start((ctx) => {
  ctx.reply("Hey y'all! I have created a Telegram channel where I'll be talking about my nonsensical projects every day. It's a way to keep both myself and you guys motivated. and I've got zero members so far, so don't be shy to join in https://t.me/+9SDyETMRYL0zYTFk", 
  Markup.inlineKeyboard([
    [Markup.button.webApp("Tap Here to play the Game", webUrl)]
  ]));
});

bot.launch();

app.use(express.json());
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.Mongo_Url);
    // console.log("connected")
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
  app.use(
    cors({
      // origin:'http://localhost:5173',
      origin:['https://this-or-that-mrcha-za9t.vercel.app',],
      optionsSuccessStatus: 200,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }),
  );
  
  app.post('/contribute_options', async (req,res)=>{
    const {
      option1,
      option2,
      category,} = req.body
                try{
                  const checker = await Temp.find({option1:option1}) 
                  console.log(checker)
                  if (checker.length == 0){
                    
                    const item = await Temp.create({
                      option1:option1,
                      option2: option2,
                      category:category,
                      option1_vote: 1,
                      option2_vote: 1,
                    })
                    res.json("submited")
                  } 
                  else{
                    res.json("option is already submited")
                  }
                  
                } 
                catch(err){
                    res.json(err)

}                  })

app.get('/test', (req,res) => {
  res.json("Test")
})

app.post('/contribute_category', async (req,res)=>{
  const {
    newCategory,
     discription,} = req.body
     try{
      const checker = await Cat.find({discription:discription}) 
      if (checker.length == 0){
                  const item = await Cat.create({
                    newCategory:newCategory,
                    discription:discription,
                  })
                  res.json("submited")
              } 
      else{
        res.json("category is already submited")
      }
            }
              catch(err){
                  res.json(err)
}                  })

app.post('/option1/:id', async (req, res) => {
  const {id}  = req.params 
  const option = await Option.findById(id);
  try {
    if (!option) {
      return res.status(404).json({ error: 'Option not found' });
    }

    option.option1_vote += 1;
    await option.save();

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/option2/:id', async (req, res) => {
  const { id } = req.params
  const option = await Option.findById(id);
  try {
    if (!option) {
      return res.status(404).json({ error: 'Option not found' });
    }

    option.option2_vote += 1;
    await option.save();

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/game/:subpage', async (req, res) => {
  const { subpage } = req.params;
  try {
    const options = await Option.find({ category: subpage });
    const randomOptions = getRandomOptions(options, 10);
    res.json(randomOptions);
    
  } catch (error) {
    res.json(error)    
  }
  

});


function getRandomOptions(options, count) {
  const shuffled = options.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}



app.listen(port, () => console.log(`Example app listening on port ${port}'`))