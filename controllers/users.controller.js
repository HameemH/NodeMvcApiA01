

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
        res.send('wait')
    
     }
    
