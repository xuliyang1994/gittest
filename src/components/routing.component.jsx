import React,{Component} from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Route,
    Link
} from 'react-router-dom';


import Home from './home/home.component.jsx';
import Buy from './buy/buy.component.jsx';
import My from './my/my.component.jsx';
import Comment from './comment/comment.component.jsx';
import Navpage from './navpage/navpage.component.jsx';




class Routing extends Component {
    
   
    render() {
        
        return(
            <HashRouter>
            <div>
                <main>
                    <Route exact path="/" render={(props)=> <Home />} />
                    <Route path="/buy"  render={(props)=> <Buy />}/>
                    <Route path="/comment" render={(props)=> <Comment />} />
                    <Route path="/my" render={(props)=> <My />} />
                 </main>
                <Navpage />
            </div>
          </HashRouter>
        )
    }
}
export default Routing