const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

const version = fs.readFileSync("./version.txt", "utf8");

app.get("/", (req, res) => {
    res.send(`
        <h1>DevOps CI/CD Project</h1>
        <h2>Application Version: ${version}</h2>
        <p>Deployment Successful</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});