const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number("(###) ###-####"),
        username: faker.internet.userName(),
        id: faker.datatype.uuid()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        name: faker.company.name(),
        adress: {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newFake
}


const newFakeUser = createUser()
const newFakeCompany = createCompany()
const userCompany = [createUser(), createCompany()]


app.get("/api/users/new", (req, res) => {
    res.json( newFakeUser );
});

app.get("/api/companies/new", (req, res) => {
    res.json( newFakeCompany );
});

app.get("/api/user/companies/new", (req, res) => {
    res.json( userCompany );
});


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
    res.send("Our express api server is now sending this over to the browser");
});

app.listen(port, () => console.log(`Listening on port: ${port}`));