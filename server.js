const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

// Midleware 

  app.use(express.static(__dirname + '/public'));
  
// Express HBS engine 
 
hbs.registerPartials(__dirname + '/views/partials');

  app.set('view engine', 'hbs');

  
// Routes
app.get('/', (req, res) => {
   
    res.render('home', {

      nombre: 'Daniel Cano',
      anio: new Date().getFullYear()

    });
});  

app.get('/about', (req, res) => {
   
    res.render('about', {
      anio: new Date().getFullYear()
    });
}); 
 
app.listen(port, ()=>{
  console.log(`Escuchando peticiones puerto ${ port }`);
});