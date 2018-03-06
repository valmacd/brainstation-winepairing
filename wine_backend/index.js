const express = require('express')
const app = express()
const axios = require('axios')
const key = require('../key.js');
const bodyParser = require('body-parser')
const cors=require('cors')
let lcboKey = key.key;
let trial = []

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

axios.get(`http://lcboapi.com/products?q=red+wine&store_id=511&where=is_vqa&access_key=${lcboKey}`).then((result) => {
  //console.log('success' + JSON.stringify(result.data.result))
  let winelist = []
  let data = result.data.result;
  for (i = 0; i < data.length; i++) {
    if (data[i].primary_category === "Wine") {
      winelist.push(data[i]);
    }
  }
  // console.log(winelist);
  }).catch((err) => {
    console.log('got an error' + err)
})

app.post('/wine',(req,res)=>{
  console.log(req.body)
})

app.listen(8080, () => {
  console.log('listening on 8080')
})


// Wine = red or white - dynamic change
// Vqa = always
// sugar content = in a range
// cost = in a range

// 