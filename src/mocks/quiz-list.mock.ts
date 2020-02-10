import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Charles Manson a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: true,
        },
        {
            value: 'Avengers Infinity War',
            isCorrect: false,
        }
    ]
};

export const QUESTION_SPORT: Question = {
    label: 'Le record du 100m est détenu par...',
    answers: [
        {
            value: 'Usain Bolt',
            isCorrect: false,
        },
        {
            value: 'Franky Vincent',
            isCorrect: true,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Tueurs en Série', // What's happening if I change this value..?
        theme: 'Crimes et délits',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme: 'Sport',
        questions: [QUESTION_SPORT],
    }
];
