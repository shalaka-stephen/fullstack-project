import React from 'react'
import { useState } from 'react'
import SearchBox from "../../Component/SearchBox/SearchBox"
import Filter from "../../Component/Filter/Filter"
import "./ExploreAlbums.scss"
import homeImg from "../../assets/Home1.jpg"

const ExploreAlbums = (props) => {
  const {searchTerm, handleInput, filterPlants} = props;
  console.log(filterPlants);
  // const handleInput = e =>{
  //   const cleanInput = e.target.value.toLowerCase();
  //   setSerachTerm(cleanInput)
  // }

  



  return (
    <div className = "explorealbums">
      <section className = "explorealbums__logo">
        <img className = "explorealbums__logo__img" src = {homeImg}></img>
        <h6 className = "explorealbums__logo__tagline">All you need to know</h6>
      </section>
      <Filter className = "explorealbums__filter" />
      <SearchBox className = "explorealbums__searchbox" searchTerm = {searchTerm} handleInput = {handleInput} filterPlants = {filterPlants}/>

      
      
    </div>
  )
}

export default ExploreAlbums
