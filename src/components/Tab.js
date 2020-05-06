import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext'; 
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Tab extends Component {
    static contextType = ThemeContext;
    render() { 
        return ( 
            <ThemeContext.Consumer>{(context) => {     
                const {showTab,startDate,handleChange} = context;
                const {flightView,hotelView,carView,otherView,searchResult,onChange } = context;
                return(
                    <div className="tabs">
                    <div className="tab-list">
                        <li onClick={(e) => showTab('flightView')}><a>Flights <i className="fa fa-plane"></i></a></li>
                        <li onClick={(e) => showTab('hotelView')}><a>Hotel <i className="fa fa-hotel"></i></a></li>
                        <li onClick={(e) => showTab('carView')}><a>Cars <i className="fa fa-car"></i></a></li>
                        <li onClick={(e) => showTab('otherView')}><a>Help <i className="fa fa-bell"></i></a></li>
                    </div>
                    <div className="tab-body">
                    <div className={flightView ? 'show': 'hide'}>
                       <div className="book-flight">
                        <form onSubmit={searchResult}>

                            <div className="group">
                                <label>Departure *</label>
                                <input required type="text" id="Departure" placeholder="Enter Departure" name="Departure" onChange={onChange} />
                                <label>Destination *</label>
                                <input required type="text" id="Destination" placeholder="Enter Destination" name="Destination" onChange={onChange}  /  >
                            </div>

                            <div className="group">
                                <label>Departure Date *</label>
                                <div className="date-picker">
                                <DatePicker
                                onChange={handleChange}
                                selected={startDate}
                                name={'startDate'}
                                dateFormat="dd/MM/yyyy"
                                required
                                />
                                </div>
                                <label>Return Date</label>
                                <input type="text" id="ReturnDate" placeholder="Enter Destination" name="ReturnDate" onChange={onChange} /  >
                            </div>

                            <div className="group">
                                <label>Travelers</label>
                                <input type="text" id="Travelers" placeholder="Enter Travelers" name="Travelers" onChange={onChange} />
                                <label>classes</label>
                                <input type="text" id="classes" placeholder="Enter classes" name="classes" onChange={onChange} /  >
                            </div>
                            <button className="submit">Search Flights <i className="fa fa-paper-plane"></i></button>
                        </form>
                       </div>
                    </div>
                    <div className={hotelView ? 'show': 'hide'}>
                        <div className="no-data">
                            <p>Opps sorry no Hotels now</p>
                            <p>Please search flight only !!</p> 
                        </div>  </div>
                    <div className={carView ? 'show': 'hide'}>
                        <div className="no-data">
                            <p>Opps sorry no Cars now</p>
                            <p>Please search flight only !!</p> 
                        </div> 
                     </div>
                    <div className={otherView ? 'show': 'hide'}>  
                        <div className="no-data">
                            <p>Please search flights from 
                                <i>Pune</i> to <i>Mumbai</i> or 
                                <i>Pune</i> to <i>Nagpur</i> only
                            </p>
                        </div> 
                     </div>
                    </div>
                    </div>
                )
            }}
            </ThemeContext.Consumer>
         );
    }
}
 
export default Tab;