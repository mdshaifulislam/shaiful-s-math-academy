import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuBar from './components/MenuBar/MenuBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import About from './components/AboutMe/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Home from './components/Home/Home'
import Header from './components/Header/Header';
import Blogs from './components/Blogs/Blogs';
import MyCourses from './components/MyCourses/MyCourses';
import ContactMe from './components/Contact/ContactMe';

function App() {
  return (
    <div className="App">
      <Router>

        <MenuBar></MenuBar>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <MyCourses></MyCourses>
          </Route>
          <Route path="/contact">
            <ContactMe></ContactMe>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );


}

export default App;


