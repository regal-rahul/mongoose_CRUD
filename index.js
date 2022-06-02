const express = require ('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('WOOF!')
})


app.listen(3000, () => {
    console.log("Listening to port 3000!")
})