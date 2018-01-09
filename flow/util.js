const colors = require('colors');

// Very simple functions, but showing some usage of flow...

// @flow
function printQuote(quote: string) {
  console.log(`True fact about Chuck Norris: ${colors.green(quote)}`.red);
}

function randomNumber(max: number, min: number): number {
  const n = Math.random() * (max - min) + min;
  return Math.round(n);
}

function handleCategories(categories: Array<string>) {
  console.log(`Available categories: ${colors.green(categories)}`.red);
}
  
module.exports = { printQuote, randomNumber, handleCategories };