const { Class } = require('../models');

const classdata = [
    {
        id: 1,
       class: "Mage", 
       description: "",
       filename: "Cast powerfull spells to take out the enemy.",
    },
    {
        id: 2,
       class: "Warrior", 
       description: "Relies on brute strength to wreak havok upon enemies nearby",
       filename: "",
    },
    {
        id: 3,
       class: "Archer", 
       description: "Sharpshooter who can take down enemies from afar while keeping a safe distance away!",
       filename: "",
    },
    {
        id: 4,
       class: "Healer", 
       description: "Lives to protect and support fellow troops by healing their wounds.",
       filename: "",
    },
    
];

const seedClasses = () => Class.bulkCreate(classdata);

module.exports = seedClasses;