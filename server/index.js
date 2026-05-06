const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dashboard')
 .then(function() {
 console.log('Conectat la MongoDB!');
 })
 .catch(function(err) {
 console.error('Eroare conectare MongoDB:', err);
 });

const Project = require('./models/Project');
const app = express();
const PORT = 3000;


app.use(express.json());


// Prima ruta: raspunde la GET /
app.get('/', function(req, res) {
 res.json({ message: 'Serverul functioneaza!' });
});
// Date (temporar in memorie, vom folosi MongoDB mai tarziu)

// GET /api/projects - returneaza toate proiectele
app.get('/api/projects', async function(req, res) {
 try {
 const projects = await Project.find();
 res.json(projects);
 } catch (err) {
 res.status(500).json({ error: 'Eroare ' + err });
 }
});


app.get('/api/projects/:id', async function(req, res) {
    try {
 const projects = await Project.findById(req.params.id);
 res.json(projects);
 } catch (err) {
 res.status(500).json({ error: 'Status 404 ' + err });
 }
});


/*app.get('/api/stats', function(req, res) {
    const total = projects.length;
    const done = projects.filter(p => p.done).length;
    const inProgress = projects.filter(p => !p.done).length;

    res.json({
        total: total,
        done: done,
        inProgress: inProgress
    });
});*/

app.post('/api/projects', async function(req, res) {
 try {
 const newProject = new Project({
 title: req.body.title,
 tech: req.body.tech,
 done: req.body.done || false,
 });
 const saved = await newProject.save();
 res.status(201).json(saved);
 } catch (err) {
 res.status(400).json({ error: err.message });
 }
});

app.delete('/api/projects/:id', function(req, res) {
   try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);

    if (!deletedProject) {
      return res.status(404).json({ error: 'Not found' });
    }

    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Porneste serverul
app.listen(PORT, function() {
 console.log('Server pornit pe http://localhost:' + PORT);
});
