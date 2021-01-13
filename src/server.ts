import express = require("express");

const PORT = 3030;
const app = express();

//code here

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on port ${PORT}...`);
})