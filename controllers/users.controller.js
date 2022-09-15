

let data = [
    {
        "id": "1",
        "gender": "male",
         "name": "John Doe",
         "contact": "john@example",
         "adress": "bd",
         "photourl": "photos"

    },
    {
        "id": "2",
        "gender": "female",
         "name": "Angela Doe",
         "contact": "john@example",
         "adress": "bd",
         "photourl": "photos"

    },
    {
        "id": "3",
        "gender": "male",
         "name": "John Doe2",
         "contact": "john@example",
         "adress": "bd",
         "photourl": "photos"

    }
]

    module.exports.getrandomUser =(req,res)=>{
        const random = Math.floor(Math.random() * data.length);
        res.send(data[random])
    
     }
    module.exports.getAllUser =(req,res)=>{
        
        res.send(data)
    
     }
     module.exports.addAUser =(req,res)=>{ 
        const newData = req.body;
       const newArr =  data.push(newData)
      console.log(data);
       res.send(data)
     }
     module.exports.removeAUser =(req,res)=>{   
        const {id} = req.query;
        console.log(id)
        const findUser = data.filter(datum => datum.id !== id);
        console.log(findUser);
   
        res.send(findUser);
     }
    
