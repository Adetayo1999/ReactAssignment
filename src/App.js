import './App.css';
import Header from './components/Header';
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";
import Footer from './components/Footer';
import Viewer from './components/Viewer';
import Converter from './components/Converter';
import Activity from './components/Activity';
function App() {
  return (
    <div className="app">
    
     <Router>
     <Header/>
       <Switch>
       
        
           <Route path="/activity">
            <h1>Activity</h1>
           </Route>
           
           <Route path="/wallet">
            <h1>Wallet</h1>
           </Route>
           <Route path="/Market">
            <h1>Market</h1>
           </Route>
           <Route path="/earn">
            <h1>Earn</h1>
           </Route>
           <Route exact path="/">
              <Viewer/>
              <Converter/>
              <Activity/>
         </Route>
           
         
       </Switch>
       <Footer/>
     </Router>
    
    </div>
  );
}

export default App;
