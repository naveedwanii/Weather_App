import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component{

    state={
        city: ''

    }
    render(){
        return(
            <div className='SearchBar'>
               <div className='SearchBarChilds'>
                   <h5 className='text-white'>Weather Up</h5>
                   <form onSubmit={this.submit} className='formSearchCity'>
                     <input type='text' name='city' onChange={this.onChange} placeholder='Search City'/>
                     <button type='submit' className='btn btn-outline-info text-white'>Search</button>
                   </form>
               </div>
            </div>
        )
    }
}

export default SearchBar