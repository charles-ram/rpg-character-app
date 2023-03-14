const { Character } = require('../models');

const characterdata = [
    {
        name: 'Inferno Fireball',//need to import from user input for character name,
        class_id: 1, 
    },
    {
        name: 'Taylor Ripped',
        class_id: 2, 
    },
    {
        name: 'Zero',
        class_id: 3, 
    },
    {
        name: 'Luke Phoenix',
        class_id: 4, 
    },

];

const seedCharacters = () => Character.bulkCreate(characterdata);

module.exports = seedCharacters;