"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import * as _ from 'lodash';
var path = require("path");
var questions = [
    {
        title: 'Log in?',
        content: 'How I should log in to the website?',
        answerCount: 2
    },
    {
        title: 'Ku bapkes?',
        content: 'Tai iskur man zinoti!?!?',
        answerCount: 5
    },
    {
        title: 'Kas nupiso karve?',
        content: 'Niekas stobal nezinos...'
    }
];
var port = process.env.PORT || 3000;
var app = express();
app.listen(port);
app.use(express.static('public'));
console.log("Sudosas PORT: " + port);
app.get('/questions', function (_req, res) {
    debugger;
    res.json(questions);
});
app.get('/main.js', function (_req, res) {
    res.sendFile(path.resolve(__dirname, '..', 'client', 'client.js'));
});
app.get('/new', function (req, res) {
    var question = req.query;
    questions.push(question);
    res.json({
        question: question,
        status: 'OK'
    });
});
//# sourceMappingURL=server.js.map