import React from 'react'
import search from "../../assets/search.jpg"
import "./SearchBox.scss"

const SearchBox = (props) => {
  const {searchTerm, handleInput} = props;
  //What are you looking for?
  
  return (
    <form className = "searchbox--box">
    <input type = "text" display = "What are you looking for" className ="searchbox--input" value = {searchTerm} onInput = {handleInput}/>

    <img className = "searchbox--img" src = {search}/>
    
    </form>
    
    
  )
}

export default SearchBox
