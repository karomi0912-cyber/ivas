const express = require("express");
const ivasmsRouter = require("./router.js"); 

const app = express();
const PORT = process.env.PORT || 3000; // Railway inject PORT otomatis

app.use(express.json()); 
app.use("/api/ivasms", ivasmsRouter);

app.get("/", (req, res) => res.send("✅ IVASMS API jalan"));

app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));