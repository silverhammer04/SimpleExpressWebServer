const express = require('express');
const app = express();
const port = 4000;

const products = [
    {
        name: "N95 Mask",
        price: 3500.95,
        quantity: 0
    },
    {
        name: "Computer",
        price: 24.95,
        quantity: 678
    },
    {
        name: "Toilet Paper",
        price: 12.98,
        quantity: 3
    },
    {
        name: "Bidet",
        price: 11.98,
        quantity: 4000
    }
]

app.get('/', (req, res) => res.send('Hello World! with nodemon'));

//app.METHOD(PATH, HANDLER)
//GET at /products
app.get('/products', (req, res) => res.send('Get at /products'));

//POST at /products
app.post('/products', (req, res) => res.send('POST at /products'));

//PUT at /products/{productID}
app.put('/products/:productID', (req, res) => 
    res.send(`PUT at/products/${req.params.productID}`)
    );

//PATCH at /products/{productID}
app.patch('/products/:productID', (req, res)=>
    res.send(`PATCH at /products/${req.params.procuctID}`)
    );

//DELET  at /products/{productID}
app.delete('/products/:productID', (req, res) =>
    res.send(`DELETE at /products/${req.params.productID}`)
    );

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));