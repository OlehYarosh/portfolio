// reducer.js
import project1 from '../../../assets/main-mini-project.png'

const initialState = {
    myProjects: [
      {
        id: 1,
        image: project1,
        title: 'Міні твітер',
        description: 'Невеличке завдання, яке переросло в міні твітер з всесвіту Володаря перстнів. Мета завдання було створити функціональну компоненту, яку можна використовувати для відображень публікацій типу твітера',
      },
    ],
    futureProjects: [
      {
        id: 2,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Unicode_0x0032.svg/1200px-Unicode_0x0032.svg.png',
        title: 'Проект 2',
        description: 'Опис 2',
      },
      {
        id: 3,
        image: 'https://www.printableparadise.com/numbers/printable-number-3-outline.png',
        title: 'Проект 3',
        description: 'Опис 3',
      },
      // Додайте більше проектів, які вам потрібні
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
  