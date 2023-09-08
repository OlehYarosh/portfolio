import project1 from '../../../assets/main-mini-project.png';
import project2 from '../../../assets/project2.png';
import project3 from '../../../assets/project3.png';

const initialState = {
    myProjects: [
        {
            id: 1,
            image: project1
        },
    ],
    futureProjects: [
        {
            id: 1,
            image: project2
        },
        {
            id: 2,
            image: project3
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
  