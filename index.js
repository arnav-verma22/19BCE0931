const express = require('express');
  
const app = express();
const axios = require('axios');
const PORT = 3000;
  
app.use(express.json());
app.post('/', (req, res)=>{
    const {name} = req.body;
      
    res.send(`Welcome ${name}`);
})
  

app.get('/numbers', (req, res)=>{
    //const {name} = req.body;
    var urlss = req.query.url;
    urlss = JSON.stringify(urlss)
    var myArray = urlss.split(",");
    for (let i = 0; i < myArray.length; i++) {
        console.log(myArray[i])
      }


    const resp = await axios.get('http://localhost:8090/primes')

    res.send('url: ' + resp);
})


app.get('/prefixes', (req, res)=>{
    //const {name} = req.body;
    // var urlss = req.query.url;
    // var myArray = urlss.split(",");
    res.send('url: ' + req.query.keywords);
})

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is running at http://localhost:"+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);