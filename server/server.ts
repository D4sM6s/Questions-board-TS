import * as express from 'express';
// import * as _ from 'lodash';
import * as path from 'path';
import { Question } from '../@types/Question';

const questions: Question[] = [
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

const port: string | number = process.env.PORT || 3000;

const app = express();

app.listen(port);
app.use(express.static('public'));

console.log(`Sudosas PORT: ${port}`);

app.get('/questions', (_req, res) => {
	debugger;

	res.json(questions);
});

app.get('/main.js', (_req, res) => {
	res.sendFile(path.resolve(__dirname, '..', 'client', 'client.js'));
});

app.get('/new', (req, res) => {
	const question: Question = req.query;
	questions.push(question);

	res.json({
		question,
		status: 'OK'
	});
});
