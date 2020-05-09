import React from "react"
function CardWithInfo(props){
		return(
			
  <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src={props.url}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <p class="myfont">{props.name}</p>
        </div>
        <div class="card-action">
          <a >{props.value}</a>
        </div>
      </div>
    </div>
  </div>
  		)
	

}
export default CardWithInfo