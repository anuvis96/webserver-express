// Helper functions : funcion que se dispara cuando una función lo requiere

const hbs = require('hbs');

hbs.registerHelper('getAnio', () =>{
    return new Date().getFullYear();
});