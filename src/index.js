const express = require('express')
const path = require('path')

const app = express()

app.get("/:id", (req, res) => {
    const inputs = JSON.parse(req.params.id)
    let newInputs = []

    for (let i = 0; i < inputs.length; i++) {
        newInputs.push(inputs[i])
    }
    console.log(newInputs)
    res.sendFile(path.join(__dirname, "index.html"))
})

app.listen(5000, () => console.log("Server running on http://localhost:5000"))
