import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
//import WeatherBody from './components/WeatherBody/WeatherBody'
class App extends React.Component{
  render(){
    return(
      <div>
       <Navbar />
       <Main />
       {/*
       <div className='WeatherContainer pt-3 pb-3'>
               <WeatherBody day={'Mon'} icon={'Sun'}/>
               <WeatherBody day={'Tue'} icon={'Mistake'}/>
               <WeatherBody day={'Wed'} icon={'Snowing'}/>
               <WeatherBody day={'Thur'} icon={'Rain'}/>
               <WeatherBody day={'Fri'} icon={'Snowing'}/>
            
             </div> 
       */}
       <Footer />
      </div>
    )
  }
}

export default App;
