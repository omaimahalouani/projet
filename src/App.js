import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateForm from './components/CreateForm';
import CreatePage from './components/Page/CreatePage';
import ManagePages from './components/ManagePages';
import AssignForm from './components/AssignForm';
import SubmitForm from './components/SubmitForm';
import ManageEntries from './components/ManageEntries';

function App() {
  return (
    <div className="App">
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
            <li>
              <Link to="/assign-form">Attribuer un formulaire aux pages</Link>
              
            </li>
            <li>
              <Link to="/submit-form">Submit Form</Link>
              
            </li>
            <li>
              <Link to="/Manage-Entries">ManageEntries</Link>
              
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/form" element={<CreateForm />} />
          <Route path="/page" element={<CreatePage />} />
          <Route path="/manage-pages" element={<ManagePages />} />
          <Route path="/assign-form" element={<AssignForm/>} />
          <Route path="/submit-form" element={<SubmitForm/>} />
          <Route path="/Manage-Entries" element={<ManageEntries/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
