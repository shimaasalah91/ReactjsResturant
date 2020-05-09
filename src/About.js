import React, { Component } from 'react';
import  CardWithInfo from "./components/CardWithInfo"
class About extends Component {
  constructor(){
		super()
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		let proxy = "https://cors-anywhere.herokuapp.com/", 
		url="https://gist.githubusercontent.com/sharkyze/71efb42a5ee58c7a892bd0423f125802/raw/08655067e3bb69dc1c8cde68edc7f901c00b9205/restaurant-menu.json"
		fetch(url)
		.then(response => response.json())
		
		.then(resturantdata => {
			console.log(resturantdata.array['restaurant-info'])
			this.setState({
				data:resturantdata.array['restaurant-info']
			})
		})
	}
	render(){
		return(
			<div>
				<h2 class="myfont"> About</h2>
				<CardWithInfo key="1" name="Delivery Fee" url={this.state.data.logo} value={this.state.data['delivery-fee']}/>
				<CardWithInfo key="2" name="Avg Delivery Time" url={this.state.data.logo} value= {this.state.data["avg_delivery_time"]}/>
				<CardWithInfo key="2" name="Minimum Order Price" url={this.state.data.logo} value= {this.state.data["minimum-order-price"]}/>

			</div>
  		)
	}
}


export default About;