import axios from 'axios';

const QuestionsDataService = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=20&category=18&difficulty=easy&type=multiple',
    method: 'GET'
});

export default QuestionsDataService;