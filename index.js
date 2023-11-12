
import express, { response } from "express";
import axios from "axios";

const app = express();
app.use(express.static("public"));


const options = {
  method: 'GET',
  url: 'https://quotes15.p.rapidapi.com/quotes/random/',
  headers: {
    'X-RapidAPI-Key': '9cab0f8082msh152f241bd12d86dp18385djsn827a676f5ee9',
    'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
  }
};

app.get("/",async (req, res) => {
  const response = await axios.request(options);
  res.render("index.ejs", { 
    quote: response.data.content,
    author: response.data.originator.name,

   });
});

app.get("/apiKey", async (req, res) =>{

    const response2 = await axios.request(options);
    res.render("index.ejs", { 
      quote: response2.data.content,
      author: response2.data.originator.name,
     }); 
});

app.listen(3000, () =>
  console.log('App listening on port 3000!'),
);
