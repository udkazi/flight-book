import { withRouter } from 'react-router-dom'
import data from '.././data/data';

import React, {createContext,Component} from 'react';
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        startDate: new Date(),
        searchDate:'',
        flightView: true,
        hotelView:false,
        carView:false,
        otherView:false,
        Departure:'',
        Destination:'',
        DepartureDate:'',
        ReturnDate:'',
        Travelers:'',
        classes:'',
        listFlight:[],
        flights:[]
    }

    componentDidMount = () => {
        this.setState({flights:data.flights});
    }
  
    showTab = (view) => {
        if(view==='flightView'){
            this.setState({ flightView: true,hotelView:false, carView:false, otherView:false, })
        }
        else if(view==='hotelView'){
            this.setState({ flightView: false,hotelView:true, carView:false, otherView:false, })
        }
        else if(view==='carView'){
            this.setState({ flightView: false,hotelView:false, carView:true, otherView:false, })
        }
        else if(view==='otherView'){
            this.setState({ flightView: false,hotelView:false, carView:false, otherView:true, })
        }
    }
    
    toggleTheme = () => {
        this.setState({isLightTheme: !this.state.isLightTheme});
        this.props.history.push("/search");
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    handleChange= date => {
        var htodayDate = new Date(date).toISOString().slice(0,10);
        console.log(htodayDate);
        this.setState({
          startDate: date,
          searchDate:htodayDate
        });
      };

    searchResult =(e) =>{
        let setArray = [];

        for(let i=0; i<this.state.flights.length; i++){ 
            if(this.state.flights[i].departure===this.state.Departure 
                && this.state.flights[i].destination===this.state.Destination 
                && this.state.flights[i].date===this.state.searchDate ){
                setArray.push(this.state.flights[i]);
                console.log(setArray);
                this.setState({listFlight:setArray});
            }
        }
        this.props.history.push("/search");
     }

     sortName = (e) =>{
        this.state.listFlight.sort(function(a, b){
            if(a.flght_name < b.flght_name) { return -1; }
            if(a.flght_name > b.flght_name) { return 1; }
        return 0;});
        this.setState({listFlight:this.state.listFlight});
     }

     sortPrice = (e) =>{
        this.state.listFlight.sort(function(a, b){
            if(a.flightprice.Basic < b.flightprice.Basic) { return -1; }
            if(a.flightprice.Basic > b.flightprice.Basic) { return 1; }
        return 0;});
        this.setState({listFlight:this.state.listFlight});
     }
 
    render() { 
        return ( 
            <ThemeContext.Provider 
            value={{...this.state,toggleTheme: this.toggleTheme,
            searchResult:this.searchResult,showTab:this.showTab,
            searchResult:this.searchResult,onChange:this.onChange,
            handleChange:this.handleChange,sortName:this.sortName,
            sortPrice:this.sortPrice}}>
                {this.props.children}
            </ThemeContext.Provider> 
         );
    }
}
 
export default withRouter(ThemeContextProvider);