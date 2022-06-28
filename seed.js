/*
import { getData } from './models/db.js';
const {getFather} = require('./models/Father.js');
const {getUser} = require('./models/User.js');
const {getSon} = require('./models/Son.js');
//require('./database/asociations');

// Usuarios
getUser = [
    { name: "Anton", lastName:"Perez", email: "azr@azr.es", password:"Ant@on434" },
    { name: "Pepe", lastName:"Perez", email: "pepe@gmail.com", password:"Ant@on434"},
    { name: "Lucia", lastName:"Perez", email: "lucia@hotmail.com", password:"Ant@on434" },
];

// Direcciones
getFather = [
    { name: "Jose", lastNamef:"Suarez", lastNamem:"Gomez", age:21, catUserId: 1 },
    { name: "Marco", lastNamef:"Suarez", lastNamem:"Gomez", age:15, catUserId: 2 },
    { name: "Miguel", lastNamef:"Suarez", lastNamem:"Gomez", age:25, catUserId: 3 },
];

// Entradas
getSon = [
    { name: "Miguel", lastNamef:"Suarez", lastNamem:"Gomez", age:21, catFatherId: 1 },
    { name: "Miguel", lastNamef:"Suarez", lastNamem:"Gomez", age:25, catFatherId: 1 }, 
    { name: "Miguel", lastNamef:"Suarez", lastNamem:"Gomez", age:25, catFatherId: 1 },
    { name: "Miguel", lastNamef:"Suarez", lastNamem:"Gomez", age:25, catFatherId: 1 }, 
    { name: "Miguel", lastNamef:"Suarez", lastNamem:"Gomez", age:25, catFatherId: 2 }, 
    { name: "Miguel", lastNamef:"Suarez", lastNamem:"Gomez", age:25, catFatherId: 2 }, 
    { name: "Miguel", lastNamef:"Suarez", lastNamem:"Gomez", age:25, catFatherId: 3 }, 
];


getData.sync({ force: true }).then(() => {
    // Conexión establecida
    console.log("Conexión establecida...");
}).then(() => {
    // Rellenar usuarios
    user.forEach(user => getUser.create(user));
}).then(() => {
    // Rellenar direcciones
    fathers.forEach(father => getFather.create(father));
}).then(() => {
    // Rellenar posts
    sons.forEach(son => getSon.create(son));
});
*/