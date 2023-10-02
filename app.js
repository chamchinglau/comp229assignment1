const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(favicon(__dirname + '/public/images/cat.ico'));

app.set('view engine', 'ejs');

app.use(express.static('public')); 

// Routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
