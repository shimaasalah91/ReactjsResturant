import React from "react"
import M from 'materialize-css';

class SocialCard extends React.Component{
	constructor(){
		super()
		this.state={

		}
	}
	render(){
		return(
			<div>
			<hr/>
			<b>
			the PracticalDiv
			</b>
			<h4 >
			date
			</h4>
			<br/>
			learning React
			<br/>
			auther:shimaa
			<br/>
	


  <div class="row">
    <div class="col s12 m7">
      <div class="card">
        <div class="card-image">
          <img src="images/sample-1.jpg"/>
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>
			</div>

			)
	}
}
export default SocialCard