import React from 'react'
import PlantCard from '../PlantCard/PlantCard'
import "./PlantList.scss"


const PlantList = (props) => {
  const {title, filterPlants} = props;
 console.log(filterPlants);

 const cardListjsx = filterPlants.map((album, index) =>{


   return(
   <>
  <img className="PlantList__img" src={album.image} alt="wave" key={title +(index+1)} />
  <div class="card-title">
  <a href="#" class="toggle-info btn">
    <span class="left"></span>
    <span class="right"></span>
  </a>
  <h2>
    {album.name}
    <small>{album.specialFeature}</small>
  </h2>
</div>
<div class="card-flap flap1">
      <div class="card-description">
        {album.description}
      </div>

      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
</div>
</>
   )
  }
  )
  
   console.log(cardListjsx);
   

  return (
    <>
    <div className = "plantlist">
    <PlantCard  cardListjsx={cardListjsx} filterPlants ={filterPlants}/>
    </div>
 
    
   
    </>
  )
}

export default PlantList
