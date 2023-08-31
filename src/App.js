// App.js
import './styles/App.css';
import './styles/pages/Header.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Projects from './pages/projects/Projects';
import ProjectDetails from './pages/projects/project-details/ProjectDetails';
import Skills from './pages/skills/Skills';
import Jobs from './pages/jobs/Jobs';
import Contacts from './pages/contacts/Contacts';
import { Provider } from 'react-redux';
import store from './pages/projects/store/store.js';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Routes>
          <Route path='/' >
            <Route index element={<Projects />} />
            <Route path='project-details' element={<ProjectDetails />} />
          </Route>
          <Route path='skills' element={<Skills />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
