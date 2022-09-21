const express = require("express");
const cors = require("cors");

//constanst
const PORT = 8080;
const HOST = "0.0.0.0";

//App
const app = express();
app.use(cors());
app.get("/", (req, res) => {
    // res.send("Welcome to Docker!");
    res.send({
        products: [
            { name: "Apple Watch SE gen 2", price: 299 },
            { name: "Apple Watch Series 8", price: 499 },
            { name: "Airpods Pro 2", price: 249 },
            { name: "Iphone 14", price: 899 },
            { name: "Iphone 14 Pro", price: 999 },
            { name: "Iphone 14 Pro Max", price: 1099 },
        ],
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} of Docker`);
