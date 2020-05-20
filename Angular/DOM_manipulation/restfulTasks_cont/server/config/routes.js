const tasks = require('../controller/tasks')

module.exports = function(app){
    app.get('/tasks', (req, res) => {
        tasks.index(req,res)
    });

    app.post('/tasks', (req, res) => {
        tasks.create(req,res)
    });

    app.get('/tasks/:id', (req, res) => {
        tasks.show(req,res)
    });

    app.put('/tasks/:id', (req, res) => {
        tasks.update(req,res)
    });

    app.delete('/tasks/:id', (req, res) => {
        tasks.delete(req,res)
    });
}