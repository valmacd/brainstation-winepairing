const express = require('express')
const app = express()
const axios = require('axios')
// const key = require('./key.js');
const bodyParser = require('body-parser')
const cors=require('cors')
// let lcboKey = key.key;

let lcboKey = 'MDo5YTMyMzU5NC0xZTM0LTExZTgtODZiNS1jZjM5OGZiNGVmOTM6YkFZQzVBajVVeHpTM0tSS0ptaXdwOVJtQTNZcll5REtaT1FB';

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());



app.post('/wine',(req,res)=>{
  let wineChoice = [];
  let userInput = req.body;
  console.log(userInput);
  let foodPair = userInput.foodpair;
  let wineColor = userInput.colour;
  let costInput = userInput.cost;
  let sugarInput = userInput.sugar;

  

  axios.get(`http://lcboapi.com/products?q=${whatColor(wineColor)}&per_page=100&store_id=511&where=is_vqa&access_key=${lcboKey}`).then((result) => {
    //console.log('success' + JSON.stringify(result.data.result))
    let winelist = []
    let data = result.data.result;
    for (i = 0; i < data.length; i++) {
      if (data[i].primary_category === "Wine") {
        winelist.push(data[i]);
      }
    }
    //console.log(winelist);
    console.log(sugarRange(sugarInput, winelist));
    }).catch((err) => {
      console.log('got an error' + err)
  })

  
})

//functions
function whatColor(colour) {
  if(colour === 'red') {
    return 'red+wine';
  }
  else if (colour === 'white') {
    return 'white+wine';
  };
}

function sugarRange(sugar, wineArray) {
  let newWineArray = [];
  if (sugar === '0-5') {
    newWineArray = wineArray.filter(wine => wine.sugar_in_grams_per_liter<5 );
    return newWineArray;
  }
}


app.listen(8080, () => {
  console.log('listening on 8080')
})


// Wine = red or white - dynamic change
// Vqa = always
// sugar content = in a range
// cost = in a range

// 