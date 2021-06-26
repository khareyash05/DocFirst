import './App.css';
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Register from "./components/Register"
import Login from "./components/Login"
import Footer from "./components/Footer"
import Profile from "./components/Profile"
import {Route} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar/>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route exact path = "/register">
        <Register/>
      </Route>
      <Route exact path = "/login">
        <Login/>
      </Route>
      <Route exact path = "/myprofile">
        <Profile/>
      </Route>
      <Footer/>
    </>
  );
}

export default App;
