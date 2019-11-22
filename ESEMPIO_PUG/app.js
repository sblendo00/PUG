const express = require('express');
const people = require('./people.json'); //Copia il file people.json dentro la variabile people
const app = express();

app.set('view engine', 'pug');   //Dico a express di usare pug come motore di template
app.use(express.static(__dirname + '/public')); // Dico ad express dove recuperare i file statici

app.get('/', function (req, res) {
//res.send('Hello World!');
res.render('index', {
   title: 'HOMEPAGE',
   people: people.profiles //Passa il vettore profiles alla pagina index.pug
 });
});

app.get('/profile', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
