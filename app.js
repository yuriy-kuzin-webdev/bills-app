const express = require('express');
const path = require('path');
const app = express();
const port = 3003;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index');
})

app.listen(port, console.log(`bills-app listening at http://localhost:${port}`));
