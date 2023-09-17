import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import CreatePage from './components/Page/CreatePage';
import ManagePages from './components/ManagePages';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/form">Formulaire</Link>
          </li>
          <li>
            <Link to="/page">Créer Page</Link>
          </li>
          <li>
            <Link to="/manage-pages">Gérer Pages</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/form" element={<CreateForm />} />
        <Route path="/page" element={<CreatePage />} />
        <Route path="/manage-pages" element={<ManagePages />} />
      </Routes>
    </Router>
  );
}

export default App;
