import './App.css';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import PaginationComponenet from './pages/PaginationComponenet';
import Products from './pages/Products';
import Profile from './pages/Profile';
import MainComponent from './Components/MainComponent';
import Form from './loginPage/Form';
import Login from './loginPage/Login';

function App() {
  return (
    <>
      <Form />
      <br />
      <Login />
    </>
  );
}

export default App;
