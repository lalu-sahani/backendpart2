const express = require("express");
const app = express();

// console.dir(app); it print the all functon and method of app object 

let port = 8080;

app.listen(port, () =>{

    console.log(` appp listening on port ${port}`);

})

// app.use((req, res) =>{
//     console.log("reqest accepted");
//     // console.log(req);

// // we can use res.send for sending any data on the webpage 

// // res.send("this is a basic respose");
// let code = "<h1> Fruit </h1> <ul> <li> mango </li> <li> apple</li> </ul>";
// res.send(code);
// })   

app.get("/", (req, res) =>{                  // slase / is a path that is used for handle traffic in network . is used with app.get for sending different response for different path
    
    
    res.send("you contacted root path");
})

app.get("/apple", (req, res) =>{
    res.send("you contacted apple path");
})

app.get("/third", (req, res) =>{
    res.send("you contacted third path");
})

app.get("/search", (req, res) =>{
    let { q } = req.query; // from this method we can send query for our server
    res.send(`<h1> your search result for query : ${q}</h1>`);
})

app.use('*', (req, res) => {
    res.send("this path is not defined in this server");
})
