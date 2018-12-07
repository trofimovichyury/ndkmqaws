const app = module.exports = require('express')();
const response = require('../helpers/response');
const responseError = require('../helpers/responseError');

const users = [
    { id: 1, firstName: 'John', lastName: 'Smith' },
    { id: 2, firstName: 'Jack', lastName: 'Brown' },
    { id: 3, firstName: 'Susan', lastName: 'White' },
    { id: 4, firstName: 'Matthew', lastName: 'Klein' },
    { id: 5, firstName: 'Leo', lastName: 'Bim' },
];

app.param('id', (req, res, next, id) => {
    req.user = users.find(user => user.id === +id);
    next();
});

app.get('/', (req, res) => {
    res.status(200);
    res.send(response(users));
});

app.get('/userId/:id', (req, res) => {
    if (req.user) {
        res.status(200);
        res.send(response(req.user));
    } else {
        res.status(404);
        res.send(responseError('User Not Found'));
    }
});