const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const {readFile} = require('fs');
app.use(cors());
app.use(express.json());
let data = []
readFile("./data.json", 'utf8', (err, result) => {
   if (err) {
      console.log(err)
      return
   }

  console.log(result);
})
console.log(data)
 app.get('/',(req,res)=>{
    res.send('Hello From Server')
 })
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })