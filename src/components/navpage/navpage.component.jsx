import React,{Component} from 'react'
import {
    Link,NavLink
}from 'react-router-dom'
import './nice.css';
class Navpage extends Component {
    render(){
        return(
                <footer className="footer">
                            <ul>
                                <li className="active"><NavLink to="/" className="fz16"><span className="glyphicon glyphicon-home fz25"></span>首页</NavLink></li>
                                <li><NavLink to="/buy" className="fz16"><span className="glyphicon glyphicon-shopping-cart fz25"></span>商城</NavLink></li>
                                <li><NavLink to="/comment" className="fz16"><span className="glyphicon glyphicon-star fz25"></span>点评</NavLink></li>
                                <li><NavLink to="/my" className="fz16"><span className="glyphicon glyphicon-user fz25"></span>我的</NavLink></li>
                            </ul>
                </footer>
            
        )
    }
    
}

export default Navpage