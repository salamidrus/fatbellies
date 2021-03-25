const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

let PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
