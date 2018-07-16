let Tasks = require('./../controllers/tasks.js');

module.exports = (app) => {
    // app.get('/all', Tasks.index);
    app.post('/create', Tasks.create);
    app.get('/all', Tasks.index);
    app.post('/update', Tasks.update);
    app.post('/delete', Tasks.delete);

};