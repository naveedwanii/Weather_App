import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='main-footer'>
                <div className='container'>
                   <div className='row'>
                        <div className='col'>
                           <h4>COMPANY</h4>
                           <ul className='list-unstyled'>
                           <li>Proven Superior Accuracy</li>
                           <li>About AccuWeather</li>
                           <li>Digital Advertising</li>
                           <li>Careers</li>
                           <li>Press</li>
                           <li>Contact Us</li>
                           </ul>
                        </div>
                        <div className='col'>
                           <h4>PRODUCTS & SERVICES</h4>
                           <ul className='list-unstyled'>
                               <li>For Business</li>
                               <li>For Partners</li>
                               <li>For Advertising</li>
                               <li>AccuWeather APIs</li>
                           </ul>
                        </div>
                        <div className='col'>
                           <h4>APPS & DOWNLOADS</h4>
                           <ul className='list-unstyled'>
                               <li>iPhone App</li>
                               <li>Android App</li>
                               <li>See all Apps & Downloads</li>
                           </ul>
                           <h4>SUBSCRIPTION SERVICES</h4>
                           <ul className='list-unstyled'>
                               <li>AccuWeather Premium</li>
                               <li>AccuWeather Professional</li>
                           </ul>
                        </div>
                        
                        <div className='col'>
                           <h4>MORE</h4>
                           <ul className='list-unstyled'>
                               <li>AccuWeather Reddy</li>
                               <li>Business</li>
                               <li>Health</li>
                               <li>Hurricane</li>
                               <li>Leisure and Recreation</li>
                               <li>Severe Weather</li>
                               <li>Space and Astronomy</li>
                               <li>Sports</li>
                               <li>Travel</li>
                               <li>Weather News</li>
                               <li>Weather Blogs</li>
                               <li>Winter Weather</li>
                           </ul>
                           <div className='social_media'>Social Media Links</div>
                        </div>
                        
                   </div>
                   <hr />
                   
                <div className='bottom-footer'>
                
                   <p className='col-sm'>
                       &copy;{new Date().getFullYear()} AccuWeather.Inc. "AccuWeather" and sun design are registered trademarks of AccuWeather.Inc.All Rights Reserved.
                   </p>
                
            </div>
                   
                </div>
                
            </div>
        )
    }
}

export default Footer
