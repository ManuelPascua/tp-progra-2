var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const profilesRouter = require('./routes/profiles');
const loginRouter = require('./routes/login')
const registerRouter= require('./routes/register');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const session = require('express-session');
// secret identifica session de los demas. Mensaje costumizable
app.use(session({
  secret: "login",
  resave: false,
  saveUninitialized: true
}));
// app.use(function (req, res, next) {
//   if (req.cookies.userId && !req.session.usuario) {
//     db.User.findByPk(req.cookies.userId).then(resultado => {
//       req.session.usuario = resultado
//       return next();
//     });
//   } else {
//     return next();
//   }
// });
// app.use(function (req, res, next) {   // manda informacion a todas las vistas (locals)
//   if (req.session.usuario) {
//     res.locals = {
//       logueado: true,
//       miUsuario: req.session.usuario    //Muestra el nombre guardado 
//     }
//   } else {
//     res.locals = {
//       logueado: false
//     }
//   }

//   return next();
// });
app.use('/', mainRouter);

app.use('/products', productsRouter);
app.use('/profiles', profilesRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter)

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
