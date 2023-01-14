const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const newFakeProduct = createProduct()
console.log(newFakeProduct)
// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );