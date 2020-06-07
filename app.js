const express = require('express');
const path = require('path');
const getline = require('./helpers/getline');
const textparser = require('./helpers/textparser');
const expLayouts = require('express-ejs-layouts');
const app = express();
const port = 3003;

app.use(expLayouts);
app.use(express.urlencoded()); // to support URL-encoded bodies

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    response.render('index');
});
app.post('/bill', (request, response) => {
    const id = request.body.id;
    const line = getline(id);

    if(!line)
        response.render('index', {search : false});
    else
    {
        const result = textparser(line);
        response.render('bill', result)
    }
})

app.listen(port, console.log(`bills-app listening at http://localhost:${port}`));
