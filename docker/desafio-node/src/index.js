const express = require('express');
const app = express();
const peopleService = require('./people-service');


peopleService.insertNew();

app.get('/', (req, res) => {
    peopleService.getAll((listOfNames) => {
        res.send(listOfNames);
    });

});

app.listen(3000, () => {
    console.log('Rodando na porta 3000');
});