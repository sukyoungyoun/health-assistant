const express = require('express');
const app = express();

const port = 5159;


const medications = [
    { id: 0, name: "Ibuprofen", type: "pain", strength: "1"},
    { id: 1, name: "Acetaminophen", type: "pain", strength: "1"},
    { id: 2, name: "Morphine", type: "pain", strength: "5"},
    { id: 3, name: "Zyrtec", type: "allergy", strength: "1"},
    { id: 4, name: "Allegra", type: "allergy", strength: "1"},
    { id: 5, name: "Xyzal", type: "allergy", strength: "4"},
    { id: 6, name: "Peptobismol", type: "digestive", strength: "1"},
    { id: 7, name: "Tums", type: "digestive", strength: "1"},
    { id: 8, name: "Gaviscon", type: "digestive", strength: "3"},
];

app.get('/', (req,res) => {
    res.send('Hello and welcome... I will be your virtual health assistant today. Please provide a query in order for me to assist you!')
});

app.get('/help', (req,res) => {
    const symptom1 = req.query.symptom1;
    const symptom2 = req.query.symptom2;
    if (!symptom1 || !symptom2) {
        res.send("Provide two valid symptoms in the query.")
    } else {
        res.send(`If your symptoms are ${symptom1} and ${symptom2}, then likely the reason for this is dehydration!`)
    }
});

app.get('/medication', (req, res) => {
    res.json(medications);
});

app.get('/medication/:type/:strength', (req,res) => {
    const { type, strength } = req.params;
    const filteredReq = medications.filter(m => 
        m.type === type && m.strength === strength
    );

    if (filteredReq.length > 0) {
        res.json({ medications: filteredReq });
    } else {
        res.status(404).json({ error: 'No matching medications were found for the provided type and strength.'});
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});