import project1 from '../../../assets/main-mini-project.png';
import project2 from '../../../assets/project2.png';
import project3 from '../../../assets/project3.png';

const initialState = {
    myProjects: [
        {
            id: 1,
            image: project1,
            title: 'FellowshipTweets',
            description: 'Невеличке завдання, яке переросло в міні твітер з всесвіту Володаря перстнів. Мета завдання було створити функціональну компоненту, яку можна використовувати для відображень публікацій типу твітера',
        },
        ],
        futureProjects: [
        {
            id: 2,
            image: project2,
            title: 'Магазин ігрових крісел',
            description: 'Простенький, односторінковий інтернет магазин ігрових крісел, є вже готовий макет в Figma, сам проект буде розроблятися в найближчий час',
        },
        {
            id: 3,
            image: project3,
            title: 'Сайт з рейтингами фільмів',
            description: 'Мій власний проект, ідея його для перегляду рейтингу фільмів від популярних кінокритиків і не тільки, проект на даний момент в не найкращому стані, розроблятиметься у вільний час після магазину ігрових крісел',
        },
    ],
};
  
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PROJECT':
        return {
            ...state,
            myProjects: [...state.myProjects, action.payload],
        };
        default:
        return state;
}
};
  
export default rootReducer;
  