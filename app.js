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
    },
]

app.use(express.json());
app.get('/', (req, res) => res.send('Hello World! with nodemon'));

//app.METHOD(PATH, HANDLER)
//GET at /products
app.get('/products', (req, res) => res.send(products));

//POST at /products
app.post('/products', (req, res) => {
    const body = req.body;
    products.push(body);
    res.send(products[products.length - 1])
});

//PUT at /products/{productID}
app.put('/products/:productID', (req, res) => {
    const index = req.params.productID;
    const body = req.body;
    products.splice(index, 1, body);
    res.send(products[index]);
});

//PATCH at /products/{productID}
app.patch('/products/:productID', (req, res)=> {
    const index = req.params.productID;
    const body = req.body;
    const keys = Object.keys(body);
    keys.forEach(key => products[index][key] = body[key]);
    res.send(products[index])
});

//DELET  at /products/{productID}
app.delete('/products/:productID', (req, res) => {
    const index = req.params.productID;
    const deletedProduct = products[index];
    products.splice(index, 1);
    res.send(deletedProduct)
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));