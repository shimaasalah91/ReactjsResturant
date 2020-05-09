import React, { Component } from 'react';


class Contact extends Component {
  constructor(){
		super()
		this.state={
			data:[]
		}
	}
	componentDidMount(){
		let proxy = "https://cors-anywhere.herokuapp.com/", 
		url="https://gist.githubusercontent.com/sharkyze/71efb42a5ee58c7a892bd0423f125802/raw/08655067e3bb69dc1c8cde68edc7f901c00b9205/restaurant-menu.json"
		fetch(proxy+url)
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
				<h2 class="myfont"> Contact Us</h2>
				<p>
						Resturant Name:
						 {this.state.data.name}
				</p>
				<p>
						Resturant Adrees:
						 {this.state.data.address}
				</p>
				
			
			</div>
  		)
	}
}

export default Contact;