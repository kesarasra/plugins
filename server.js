const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname)); // serve files in this folder

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "colorcoder.html"));
});

app.listen(PORT, () => console.log(`ColorCoder running at http://localhost:${PORT}`));
