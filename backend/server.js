import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.get("/products", (req, res) => {
    res.send(DataTransfer.products);
});

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
});

//m8qRGYiHKO8S1Wd3