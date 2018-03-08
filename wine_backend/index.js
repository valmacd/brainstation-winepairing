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
  let wineColor = userInput.colour;
  let costInput = userInput.cost;
  let sugarInput = userInput.sugar;

  apiRequest(wineColor, costInput, sugarInput, 3, res);
})

//all functions are below

function apiRequest(wineColor, costInput, sugarInput, endInput, res, wineArray=[], startInput=1) {
  if (startInput === endInput) {
    //console.log(wineArray);
    let sugarWinelist = sugarRange(sugarInput, wineArray);
    let costWinelist = price(costInput, sugarWinelist);
    let randomList = randomizer(costWinelist);
    console.log(randomList.length);
    //res.send('hey');
    res.json({randomList});
  }
  else {
    axios.get(`http://lcboapi.com/products?q=${whatColor(wineColor)}&page=${startInput}&per_page=100&store_id=511&where=is_vqa&access_key=${lcboKey}`)
      .then((result) => {
        startInput ++;
        let data = result.data.result;
        for (i = 0; i < data.length; i++) {
          if (data[i].primary_category === "Wine") {
            wineArray.push(data[i]);
          }
        }
        apiRequest(wineColor, costInput, sugarInput, endInput, res, wineArray, startInput);
      })
      .catch((err) => {
        console.log('got an error' + err);
      });
  }
}

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
  else if (sugar === '5-10') {
    newWineArray = wineArray.filter(wine => wine.sugar_in_grams_per_liter>5 && wine.sugar_in_grams_per_liter<10);
    return newWineArray;
  }
  else if (sugar === '10-20') {
    newWineArray = wineArray.filter(wine => wine.sugar_in_grams_per_liter>10 && wine.sugar_in_grams_per_liter<20);
    return newWineArray;
  }
  else {
    newWineArray = wineArray.filter(wine => wine.sugar_in_grams_per_liter>20);
    return newWineArray;
  }
}

function price(cost, wineArray) {
  let newWineArray = [];
  if (cost === '0-20') {
    newWineArray = wineArray.filter(wine => wine.price_in_cents<20*100 );
    return newWineArray;
  }
  else {
    newWineArray = wineArray.filter(wine => wine.price_in_cents>20*100);
    return newWineArray;
  }
}

function randomizer(wineArray) {
  if(wineArray.length <= 4) {
    return wineArray;
  }
  else {
    let newArray = [];
    for (let i=0; i<4; i++) {
      let random = Math.floor(Math.random() * wineArray.length);
      newArray.push(wineArray[random]);
      wineArray.splice(random, 0);
    }
    console.log(newArray);
    return newArray;
  }
}

app.listen(8080, () => {
  console.log('listening on 8080')
})
