import express from "express"

const app = express(); 
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/contact", (req, res) => {
    res.send("contact us!");
});

app.get("/about", (req, res) => {
    res.send("about page");
});

app.listen(port, ()=> {
    console.log(`server running on port ${3000}`);
})