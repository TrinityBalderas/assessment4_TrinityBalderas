const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune)

const { getPopUp } = require('./controller')
app.get("/api/popUp", getPopUp)

const { getAttempt } = require('./controller')
app.get("/api/attempt", getAttempt)

const { getAttempt2 } = require('./controller')
app.get("/api/attempt2", getAttempt2)

const{ getls } = require('./controller')
app.get("/api/ls", getls)

app.listen(4000, () => console.log("Server running on 4000"));
