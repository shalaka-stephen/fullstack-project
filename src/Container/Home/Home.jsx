import React from 'react'
import './Home.scss'
import PlantList from "../../Component/PlantList/PlantList"

const Home = (props) => {
  const {unsortedAlbums, title,filterPlants } = props;
  console.log(unsortedAlbums);

  return (
    <>
    <section className = "home_cardlist">
    <PlantList title = {title } unsortedAlbums = {unsortedAlbums} filterPlants ={filterPlants}  />
    </section>
    </>
  )
}

export default Home
