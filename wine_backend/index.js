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
  //console.log(userInput);
  debugger
  // let foodPair = userInput.foodpair;
  let wineColor = userInput.colour;
  let costInput = userInput.cost;
  let sugarInput = userInput.sugar;

  apiRequest(wineColor, costInput, sugarInput, 3, res);

  // let winelist = [];
  // for (let i=1; i<5; i++) {

    
    // }
    // console.log(sugarRange(sugarInput, winelist));

  })

  //functions

  function apiRequest(wineColor, costInput, sugarInput, endInput, res, wineArray=[], startInput=1) {
    if (startInput === endInput) {
      //console.log(wineArray);
      let sugarWinelist = sugarRange(sugarInput, wineArray);
      let costWinelist = price(costInput, sugarWinelist);
      let randomList = randomizer(costWinelist);
      console.log(randomList.length);
      res.send('hey');
    }
    else {
      axios.get(`http://lcboapi.com/products?q=${whatColor(wineColor)}&page=${startInput}&per_page=100&store_id=511&where=is_vqa&access_key=${lcboKey}`).then((result) => {
      //console.log('success' + JSON.stringify(result.data.result))
      startInput ++;
      let data = result.data.result;
      for (i = 0; i < data.length; i++) {
        if (data[i].primary_category === "Wine") {
          wineArray.push(data[i]);
        }
      }
      apiRequest(wineColor, costInput, sugarInput, endInput, res, wineArray, startInput)
      }).catch((err) => {
        console.log('got an error' + err)
      })
    }
    
      //res send something here
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
    // else if (cost === '30-50'){
    //   newWineArray = wineArray.filter(wine => wine.price_in_cents>30*100 && wine.price_in_cents>50*100);
    //   return newWineArray;
    // }
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
      let randomArray = [];
      let randomNumber;
      for (let i=0; i<4; i++) {
        let random = Math.random(wineArray.length);
        randomNumber = randomCheck(random, randomArray);
      }
      randomArray.push(randomNumber);
      newArray.push(wineArray[randomNumber]);
      console.log(randomArray);
      console.log(wineArray);
    }
  }

  function randomCheck(random, randomArray) {
    for (let j=0; j<randomArray.length; j++) {
      if (random === randomArray[j]) {
        let randomNum = Math.random(wineArray.length);
        randomCheck(randomNum);
      }
    }
    return random;
  }

app.listen(8080, () => {
  console.log('listening on 8080')
})


// Wine = red or white - dynamic change
// Vqa = always
// sugar content = in a range
// cost = in a range

// 