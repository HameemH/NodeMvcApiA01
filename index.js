const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const {readFile, writeFile} = require('fs');
app.use(cors());
app.use(express.json());
let userdata = []
readFile("./data.json", 'utf8', (err, result) => {
   
   if (err) {
      console.log(err)
      return
   }
   const data = JSON.parse(result)
   
   app.get('/',(req,res)=>{
      const random = Math.floor(Math.random() * data.length);
      res.send(data[random])

   })
   app.post('/',async(req,res)=>{
      console.log(data)
      const newData = req.body;
      const newArr = await data.push(newData)
     
      /* writeFile(
         './data.json',
         `${newArr}`,
         (err, result) => {
           if (err) {
             console.log(err)
             return
           }
           console.log('done with this task')
         }
       ) */
        res.send('')
   })
})
 
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })