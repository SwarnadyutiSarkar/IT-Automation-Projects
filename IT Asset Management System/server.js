const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auxiliary_service', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const auxiliarySchema = new mongoose.Schema({
    name: String,
    description: String,
    status: String,
});

const Auxiliary = mongoose.model('Auxiliary', auxiliarySchema);

app.get('/auxiliaries', async (req, res) => {
    const auxiliaries = await Auxiliary.find();
    res.json(auxiliaries);
});

app.post('/auxiliaries', async (req, res) => {
    const { name, description, status } = req.body;
    const auxiliary = new Auxiliary({ name, description, status });
    await auxiliary.save();
    res.json(auxiliary);
});

app.put('/auxiliaries/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, status } = req.body;
    const auxiliary = await Auxiliary.findByIdAndUpdate(id, { name, description, status }, { new: true });
    res.json(auxiliary);
});

app.delete('/auxiliaries/:id', async (req, res) => {
    const { id } = req.params;
    await Auxiliary.findByIdAndDelete(id);
    res.json({ message: 'Auxiliary deleted' });
});

app.listen(5001, () => {
    console.log('Node.js auxiliary service is running on port 5001');
});
