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

const { putAttempt } = require('./controller')
app.put("/api/attempt/:id", putAttempt)

const { postBtnExample } = require('./controller')
app.post("/api/postExample", postBtnExample)

const { postNumBtn } = require('./controller')
app.post("/api/postNumButton", postNumBtn)

app.listen(4000, () => console.log("Server running on 4000"));
