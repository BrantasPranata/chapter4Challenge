const express = require('express');
const app = express();



app.get('/',(req,res) => {
    res.send("Index - Halo Dunia - Brantas");
});

app.get('/ID:hpId',(req,res) => {
    res.send(req.params);
});

app.get('/handphone',(req,res) => {
    res.json([
        {
            id: 1,
            merk: 'Xiaomi',
            grade: 'Mid'
        },
        {
            id: 2,
            merk: 'Itel',
            grade: 'Low'
        },
        {
            id: 3,
            merk: 'Infinix',
            grade: 'Mid'
        },
        {
            id: 4,
            merk: 'Vivo',
            grade: 'Mid'
        },
        {
            id: 5,
            merk: 'Samsung',
            grade: 'High'
        },
        {
            id: 6,
            merk: 'IPhone',
            grade: 'High'
        }
    ]);
});

app.listen(3000, () => {
    console.log('server on');
});
