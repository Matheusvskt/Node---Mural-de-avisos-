const PORT = 5000;
const express = require("express");
const path = require("path");
const apiRoute = require('./Routes/api')
const app = express();

app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, "public")));


app.listen(PORT, () => {
    console.log(`Server rodando na porta: ${PORT}`)
})
