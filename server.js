const express = require('express');
const exphbs = require('express-handlebars');

const PORT = 3030 || process.env.PORT;

const app = express();

app.set('views', './dev/views');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log('\nServer Listening to PORT: http://localhost:' + PORT);
})