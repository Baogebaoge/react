import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './pages/home/home'
import Content from './pages/content/content'
import List from './pages/list/list'

class App extends Component{
   render (){
       return (
           <Router>
               <div>
                   <Route exact path="/" component={Home} />
                   <Route  path="/content/:id/:title" component={Content} />
                   <Route  path="/list/:type/:value" component={List} />
               </div>
           </Router>
       )
   }
}
export default App;
