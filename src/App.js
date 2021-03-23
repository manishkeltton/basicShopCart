import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import Sidebar from './Components/Sidebar';
import PaginationComponenet from './pages/PaginationComponenet';
import Products from './pages/Products';
import Profile from './pages/Profile';
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <>
      <LoginPage />
    </>
  );
}

export default App;
