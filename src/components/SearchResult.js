import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import { ThemeContext } from '../contexts/ThemeContext'; 

class SearchResult extends Component {
    static contextType = ThemeContext;
    render() { 
        return ( 
            <ThemeContext.Consumer>{(context) => { 
                const {listFlight,flights,sortName,sortPrice} = context;
                const listItems = listFlight.map((item) =>
                <div key={item.id}>
                  <div className="list-flights">
                    <div>
                        <h4>{item.departure} to {item.destination} <span className="sort">{item.flght_name} on {item.date}</span></h4>
                        <ul>
                            <li>
                                Basic Price{item.flightprice.Basic} <i className="fa fa-usd"></i> 
                            </li>
                            <li>
                                Economy Price{item.flightprice.economy} <i className="fa fa-usd"></i> 
                            </li>
                            <li>
                                Medium Price{item.flightprice.main} <i className="fa fa-usd"></i> 
                            </li>
                        </ul>
                    </div>
                  </div>
                </div>
                );

                return(
                   <div className="search-fligh-list">
                       <Link to="/">Back</Link>
                      <h3>Avaliable flights <i className="fa fa-paper-plane"></i>
                          <span className="sort" onClick={sortName}>Sort by Name</span>
                          <span className="sort" onClick={sortPrice}>Sort by Price</span>
                      </h3>
                       {listItems}                    
                   </div>
                )
            }}</ThemeContext.Consumer>
         );
    }
}
 
export default SearchResult;