import React from 'react'
import { useState } from 'react'
import Home from "./Container/Home/Home"
import ExploreAlbums from './Container/ExploreAlbums/ExploreAlbums'
import "./App.scss"
import plants from "./Data/plants"

const App = () => {

  const unsortedAlbums = plants.filter(album => album.image)

  const [searchTerm, setSerachTerm] = useState('');

  const handleInput = e =>{
    const cleanInput = e.target.value.toLowerCase();
    setSerachTerm(cleanInput)
  }

  const filterPlants = unsortedAlbums.filter(album => {
    const albumTitleLower = album.name.toLowerCase();
    return albumTitleLower.includes(searchTerm) && album.name;
    })

    console.log(filterPlants);


  return (
    <>
    <div className = "main">
    <Home title = "Galary" unsortedAlbums = {unsortedAlbums} filterPlants ={filterPlants} />
    <ExploreAlbums searchTerm = {searchTerm} handleInput = {handleInput} filterPlants ={filterPlants}/>
    </div>
    </>
  )
}

export default App

