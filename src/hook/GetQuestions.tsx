import { Questions } from '../redux/feature/UseGame';
import QuestionsDataService from '../data/QuestionsDataService';

export const GetQuestions = async () => {
    const questionsPromise = QuestionsDataService.get<Questions>('');
    
    const response = await Promise.all([
         questionsPromise
    ])

    const questions = response[0].data
    return(
        questions
    )
}