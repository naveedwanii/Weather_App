
import React from 'react'
import WeatherBody from '../WeatherBody/WeatherBody'
import Weather from '../../apis/api'
import SearchBar from '../SearchBar/SearchBar'

class Main extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       temp: [],
       city: null,
       isLoaded: false 
    };
  }

  componentDidMount(){
    this.setState({
      isLoaded: true
    })
  }
  
 searchCity = async city =>{
   await WeatherBody.get(`daily?city=${city}&key=3883f69ab25f46dc92cdf2b5d66a1517`).then(res => {
     const temp = res.data.data;
     const city = res.data.city_name;
     
     this.setState({
       temp,
       city,
       isLoaded: true
     });
   });
 };

  render(){

    return (
        <div className='Main'>
          <React.Fragment>
            <SearchBar city={this.state.city} searchCity={this.searchCity}/>
          </React.Fragment>
             <div className='WeatherContainer pt-3 pb-3'>
               <WeatherBody day={'Mon'} icon={'Sun'} minTemp={15} maxTemp={25}  />
               <WeatherBody day={'Tue'} icon={'Mistake'} minTemp={5} maxTemp={10}/>
               <WeatherBody day={'Wed'} icon={'Snowing'} minTemp={15} maxTemp={-5}/>
               <WeatherBody day={'Thur'} icon={'Rain'} minTemp={15} maxTemp={25}/>
               <WeatherBody day={'Fri'} icon={'Snowing'} minTemp={15} maxTemp={25}/>
            
             </div> 
            
        </div>
    )
}
}

export default Main

