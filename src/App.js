import React from 'react'
import './App.css';
// import routing component from react-router-dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import components and pages 
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import SingleProject from './Pages/SingleProject'
import Error from './Pages/Error'



const App = () => {
  return (
   <Router>
      <NavBar/>
        <Switch>
          <Route exact path="/Kamamini-react" component={Home} />
          <Route exact path="/Kamamini-react/login" component={Login} />
          <Route exact path="/Kamamini-react/signup" component={SignUp} />
          <Route exact path="/Kamamini-react/project/:slug" component={SingleProject} />
          <Route  component={Error} />
        </Switch>
      <Footer/>
   </Router>
  )
}

export default App
