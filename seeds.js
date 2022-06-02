const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO ERROR!!!!")
        console.log(err)
    })

const p = new Product({
    name: 'Litchi',
    price: 10,
    category: 'fruit'
})

p.save()
.then(p => {
    console.log(p)
})
.catch(e => {
    console.log(e)
})