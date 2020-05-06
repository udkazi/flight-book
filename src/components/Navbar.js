import React ,{Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; 

class Navbar extends Component {
    static contextType = ThemeContext;
    render() { 
        return (
            <ThemeContext.Consumer>{(context) => { 
                return(
                    <nav className="navbar">
                        <li><a className="active">CxLoyality <i className="fa fa-paper-plane-o"></i></a></li>
                    </nav>
                )
            }}</ThemeContext.Consumer>
          );
    }
}
 
export default Navbar;