import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Banner from './Components/Banner';
import CostSection from './Components/CostSection';
import About from './Components/About';
import Services from './Components/Services';
import Servicesarry from './Components/Servicesarry';
import Footer from './Footer';
import Contact from './Components/Contact';
import Work from './Components/Work';
import { Route, Switch ,Redirect} from 'react-router-dom';
import Property from './Components/property/Property';




function App() {
  return (
   <>
   {/* <Switch>
     <Route path='/' component={Navbar}/>
     <Route path='/about' component={About}/>
     <Route path='/contact' component={}/>
     <Route path='/' component={Navbar}/>
   </Switch> */}
   <Navbar/>
   <Switch>
 
<Route exact path='/about' component={About}/>
<Route exact path='/contact' component={Contact}/>
<Route exact path='/banner' component={Banner}/>
<Route exact path='/service' component={Services}/>
<Route exact path='/banner' component={Banner}/>
<Route exact path='/CostSection' component={CostSection}/>
<Route exact path='/work' component={Work}/>
<Route exact path='/property' component={Property}/>

<Redirect to='/'/>
</Switch>
    <Banner/>
   <CostSection/>
   <About />
  <Services/>
  <Work/>
  <Contact/>
 
  <Footer/>
  
   </>
  );
}

export default App;
