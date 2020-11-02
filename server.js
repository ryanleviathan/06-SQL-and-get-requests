require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json([
        {
            Name: 'Masterion',
            Title: 'Lookout',
            Town: 'Dust Town'
        },
        {
            Name: 'Lastericus',
            Title: 'Engineer',
            Town: 'Dust Town'
        },
        {
            Name: 'Fast Mike',
            Title: 'Cowboy',
            Town: 'Dust Town'
        }
    ])
})

app.get('/towns', (req, res) => {
    res.json([
        {
            City: 'Dust Town',
            Region: 'Dust Valley'
        },
        {
            City: 'New Hamilton',
            Region: 'Riverside Bluffs'
        },
        {
            City: 'Trash Zone',
            Region: 'The Great Trash Wilds'
        },
        {
            City: 'Elliston',
            Region: 'Forest'
        }
    ])
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});