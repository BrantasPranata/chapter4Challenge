const express = require('express');
const app = express();
const router = require('./routes/routes')
//const router = express.Router;
const login = [];

const logger = (req,res,next) => {
    console.log(`${req.method} ${req.url}` );
    next();
};


app.use(logger);
app.set('view engine', 'ejs');

app.use('/', router)

app.get('/login' , (req,res) => {
    res.render('index');
});
app.use(express.json());
app.post('/login' , (req,res) => {
    const username = req.body.username;
    const password = req.body.password;
    const status_login = 'Lempar untuk Pengecekan ke Database';
    login.push({username,password,status_login});
    res.json(login);
});


app.listen(3000, () => {
    console.log('server on');
});
