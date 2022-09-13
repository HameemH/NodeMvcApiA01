const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;
const usersroute = require('./routes/v1/usersRoute')
const {readFile, writeFile} = require('fs');
app.use(cors());
app.use(express.json());

//   readFile("./data.json", 'utf8', (err, result) => {
   
//    if (err) {
//       console.log(err)
//       return
//    }
//   module.exports.Datafile= JSON.parse(result)
   
   
//    app.post('/',async(req,res)=>{
      
//       const newData = req.body;
//       const newArr =  data.push(newData)
//       console.log(data);
//      /* 
//       writeFile(
//          './data.json',
//          `${data}`,
//          (err, result) => {
//            if (err) {
//              console.log(err)
//              return
//            }
//            console.log('done with this task')
//          }
//        ) */
//         res.send(data)
//    })
// }) 

app.use('/api/users/',usersroute)
 
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
  })