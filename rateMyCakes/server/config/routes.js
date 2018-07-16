let Cakes = require('./../controller/cakes.js');

module.exports = (app) => {
    // app.get('/all', Tasks.index);
    app.post('/create', Cakes.create);
    app.get('/all', Cakes.listAllCakes);
    app.post('/update', Cakes.update);
    app.post('/find', Cakes.findOne);
    // app.post('/delete', Cakes.delete);

};