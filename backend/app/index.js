// const Dragon = require('./dragon.js');

// const fooey = new Dragon({
//     birthday: new Date(),
//     nickname: 'fooey'
// });

// const baloo = new Dragon({
//     nickname: 'baloo',
//     birthday: new Date(),
//     traits: [{ traitType: 'backgroundColor', traitValue: 'green' }]
// });

// const mimar = new Dragon()

// console.log('fooey', fooey)
// console.log('baloo', baloo)
// console.log('mimar', mimar)

// setTimeout(() => {
//     const gooby = new Dragon()
//     console.log('gooby', gooby)

// }, 3000);

// const Generation = require("./generation")

// const generation = new Generation;

// console.log('generation', generation)

// const gooby = generation.newDragon();

// console.log ('gooby', gooby)

// setTimeout(() => {
//     const mimar = generation.newDragon();

//     console.log('mimar', mimar)
// }, 15000);

const GenerationEngine = require ('./generation/engine');
const express = require('express');
const dragonRouter = require('./api/dragon')
const generationRouter = require('./api/generation')
// const Dragon = require('./dragon');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter)
app.use('/generation', generationRouter)
 
engine.start();

// setTimeout(() => {
//     engine.stop()
// }, 20000);

module.exports = app;