
import './App.css';
import { Switch, Route, Link,  BrowserRouter as Router,
} from "react-router-dom";
import Navar from './Navar';
import Header from './Header';
import CarouselFadeExample from './slider'
import Service from './service';
import Project from './Project';
import Enquire from './Enquire';
import Footer from './Footer';
import MainservicePart from './Main_Service';
import MainAbout from './Main_About';
import Footer1 from './Footer1';
import Contact from './Contact';
import MainProject from './Mainproject';




function App() {
  return (
    <>

<Router>     
     <Switch>
     <Route exact path="/">
           <Navar/>
           <Header/>
           <CarouselFadeExample/>
           <Service/>
           <Project/>
           <Enquire/>
           <Footer/>
           <Footer1/>
          </Route>
          <Route exact path="/home">
           <Navar/>
           <Header/>
           <CarouselFadeExample/>
           <Service/>
           <Project/>
           <Enquire/>
           <Footer/>
           <Footer1/>
          </Route>
          <Route exact path="/service_part">
           <MainservicePart/>
          </Route>
          <Route exact path="/about_part">
           <MainAbout/>
           <Footer1/>
          </Route>
          <Route exact path="/contact">
           <Contact/>
          </Route>
          <Route exact path="/project">
           <MainProject/>
          </Route>
          
            </Switch>
   
    </Router>



    

  
    </>
  );
}

export default App;



