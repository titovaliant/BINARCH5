const express = require("express");
const app = express()
const path = require('path');
// var homeRouter = require('./views/home');
// var loginRouter = require('./views/login');
// var gameRouter = require('./views/game');
// console.dir(app)

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     // res.send("HELLO TITO I GOT YOUR REQUEST!")
//     // 
//     res.send('<h1>LOVE WEBPAGE!</h1>')
// })

// app.get('*', (req, res) => {
//     res.send("I don't know the path!")
// })

// app.get('/', (req, res) => {
//     res.send('This is the home page!')
// })

// app.get('/cat', (req, res) => {
//     res.send('MEOW!!')
// })

// app.post('/cat', (req, res) => {
//     res.send('POST MEOW!!')
// })

// app.get('/dogs', (req, res) => {
//     res.send('WOOF!')
// })
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use('/', homeRouter);
// app.use('/login', loginRouter);
// app.use('/game', gameRouter);

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/game', (req, res) => {
    res.render('game')
})

// app.get('/random', (req, res) => {
//     const randomy = Math.floor(Math.random()*10)+1;
//     res.render('random', {randomy})
// })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
module.exports = app;

app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000!")
})