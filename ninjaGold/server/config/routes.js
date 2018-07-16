
var Golds = require('./../controllers/golds.js');

module.exports = (app) => {
    app.get('/gold/getSaved', Golds.index);
    app.post('/gold/addNew', Golds.create);
    app.post('/gold/saved', Golds.updateOne);
}