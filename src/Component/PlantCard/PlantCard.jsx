import React from 'react'
import "./PlantCard.scss";
//import plants from "../../Data/plants";

const PlantCard = (props) => {
 
  const{cardListjsx,unsortedAlbums} = props
  console.log(cardListjsx);
  console.log(unsortedAlbums);
  return (
    <>
  
    <div>
      <div class="card">

    <div class="card__image-holder">{cardListjsx}</div>

    {/* <div class="card-title">
      <a href="#" class="toggle-info btn">
        <span class="left"></span>
        <span class="right"></span>
      </a>
      <h2>
        Rose
           {console.log("plants",props.unsortedAlbums[0].name)}

          
          <small>{unsortedAlbums.specialFeature}</small>
      </h2>
    </div> */}

    <div class="card-flap flap1">
      <div class="card-description">
        {/* {unsortedAlbums.description} */}
      </div>

      <div class="card-flap flap2">
        <div class="card-actions">
          <a href="#" class="btn">Read more</a>
        </div>
      </div>
    </div>
    </div>
    </div>
    </>
 )
}

export default PlantCard
