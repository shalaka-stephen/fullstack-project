import React from 'react'
import "./Filter.scss"
import downarrow from "../../assets/downarrow.jpg"

const Filter = () => {
  return (
    <div className = "filter--main">
    <p className = "filter--text">All Categories</p>
    <img className = "filter--arrow" src = {downarrow}/>
    </div>
     
  )
}

export default Filter
