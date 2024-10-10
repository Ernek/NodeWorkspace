const express = require('express');

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/dogs', function(request, response) {
  console.log("You asked for dogs")
  console.log(request)
  response.send("WOOF WOOF")
})

app.get('/cats', function(request, response) {
  console.log("You asked for cats")
  // console.log(request)
  response.send("MEAW MEAW")
})
const animals = {
  dog: "Dogs are human's best friends",
  cat: "Cats are more fun than dogs"
}

app.get("/animal/:animaltype", function(request, response) {
  const animal = request.params.animaltype
  return response.send(`${animals[animal]}`)
})

app.get('/search', (req, res) => {
  const {term = 'chair'} = req.query;
  return res.send(`SEARCH PAGE: term: ${term}`)
})

app.get('/headers', (req, res) => {
  // const {headers} = req.headers;
  return res.send(req.headers)
})




app.listen(3000, function() {
  console.log('App on port 3000');
})
