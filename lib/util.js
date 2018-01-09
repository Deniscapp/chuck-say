const colors = require('colors');


function printQuote(quote) {
  console.log(`True fact about Chuck Norris: ${colors.green(quote)}`.red);
}

function randomNumber(max, min) {
  const n = Math.random() * (max - min) + min;
  return Math.round(n);
}

function handleCategories(categories) {
  console.log(`Available categories: ${colors.green(categories)}`.red);
}

module.exports = { printQuote, randomNumber, handleCategories };