const test = require('ava');
const fetch = require('node-fetch');

test('Testing API with a random Chuck Norris fact', async t => {
    t.plan(1);
    let res;
    try {
        res = await fetch('https://api.chucknorris.io/jokes/random');
    } catch (err) {
        console.log(err);
    }
    t.is(res.status, 200);
});

test('List all categories for Chuck Noris facts', async t => {
    const categories = ['explicit', 'dev', 'movie', 'food', 'celebrity', 'science', 'sport',
     'political', 'religion', 'animal', 'history', 'music', 'travel', 'career', 
     'money', 'fashion'];
    
    t.plan(2);
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
    t.is(res.status, 200);
    t.deepEqual(data, categories);
});
