const express = require("express");
const router = express.Router();
const { analyzeText } = require("../functions/languageFunctions.js")

router.get("/analyze", async(req, res) => {
    const {text} = req.body;

    if(!text) {
        return res.status(400).send("Missing parameters");
    }

    const analysis = await analyzeText(text);
    return res.json({
        analyzedText: analysis
    })

})

module.exports={router}
