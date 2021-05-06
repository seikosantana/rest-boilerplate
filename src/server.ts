import express = require("express");
import cors from "cors";

const PORT = 3030;
const app = express();

app.use(cors)
app.use(express.json({
    type: "application/json"
}))

//code here

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Listening on port ${PORT}...`);
})