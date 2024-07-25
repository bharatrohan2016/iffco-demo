
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Farmers from './Pages/Farmers/Farmers';
import Login from './Pages/Login/Login';
import Profile from './Pages/Profile/Profile';
import Layout from './Layout';
import { NotificationContainer } from 'react-notifications';

function App() {
  return (
      <HashRouter>
        <Routes>
          <Route element= {<Login/>} path="/" />
          <Route element = {<Login/>} path="/login" />
          <Route element= {<Layout><Farmers/></Layout>} path="/farmers" />
          <Route element= {<Layout><Profile/></Layout>} path="/profile/:id" />
        </Routes>
        <NotificationContainer/>
      </HashRouter>
  );
}

export default App;
