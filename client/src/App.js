import './App.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import DocRegister from './components/docRegister';
import UserRegister from './components/UserRegister';
import {Route} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route path = "/register">
        <Register/>
      </Route>
      <Route path = "/docregister">
        <DocRegister/>
      </Route>
      <Route path = "/userregister">
        <UserRegister/>
      </Route>
      <Route path = "/login">
        <Login/>
      </Route>
      <Route path = "/myprofile">
        <Profile/>
      </Route>
      <Footer/>
    </>
  );
}

export default App;
