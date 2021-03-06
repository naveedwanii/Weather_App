import React from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends React.Component {
    render() {
        return (
         <div className='background-image'>
            <nav className='NavbarItems'>
                <h1 className='navbar-logo'>AccuWeather<i className='fa fa-cloud-sun'></i></h1>
                 <div className='menu-icon'>
                 </div>  
                 <ul className='nav-menu'>
                 {
                     MenuItems.map((item, index) =>{
                         return(
                        <li key={index}>
                          <a className={item.cName} href={item.url}>
                         {item.title}    
                        </a>
                        </li>
                         )
                  })
                 } 
                 
                
                 </ul>             
            </nav>
        </div>
        )
    }
}

export default Navbar
