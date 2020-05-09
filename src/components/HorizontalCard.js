import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

function HorizontalCard(props){
	const n=props.name 
	console.log("n "+n)
		return(
			<div class="row">
			    <div class="col s12 m12">
			      <div class="card blue-grey darken-1">
			        <div class="card-content white-text">
			          <span class="card-title">{props.name}</span>
			          
			        </div>
			        <div class="card-action">
			          <a href={'/menu?type='+n} >Menu</a>

			        </div>
			      </div>
			    </div>
	  		</div>
  		)
	

}
export default HorizontalCard