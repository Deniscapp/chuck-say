#!/usr/bin/env node

const argv = require('yargs').usage('Usage $0 -c [category], -t [text], -l')
    .example('$0 -l', 'list all the available categories')
    .example('$0 -c religion', 'gives you a fact/joke about Chuck involving religion')
    .argv;
const fetch = require('node-fetch');
const colors = require('colors');
const { printQuote, randomNumber, handleCategories } = require('../lib/util');

const main = async args => {
    if (args.l) {
        let res;
        try {
            res = await fetch('https://api.chucknorris.io/jokes/categories');
        } catch (err) {
            console.log(err);
        }
        let data;
        try {
            data = await res.json();
        } catch (err) {
            console.log(err);
        }

        handleCategories(data);
    } else if (args.c) {
        const { c } = args;
        let res;
        try {
            res = await fetch(`https://api.chucknorris.io/jokes/random?category=${c}`);
        } catch (err) {
            throw new Error(err);
        }

        let data;
        try {
            data = await res.json();
        } catch (err) {
            throw new Error(err);
        }
        printQuote(data.value);
    } else if (args.t) {
        const { t } = args;
        let res;
        try {
            res = await fetch(`https://api.chucknorris.io/jokes/search?query=${t}`);
        } catch (err) {
            throw new Error(err);
        }

        let data;
        try {
            data = await res.json();
        } catch (err) {
            throw new Error(err);
        }

        const { total, result } = data;

        if (total > 0) {
            const i = randomNumber(total, 0);
            printQuote(result[i].value);
        } else {
            console.log(`No facts on the word: ${colors.green(t)}`.red);
        }
    }
};

main(argv);
