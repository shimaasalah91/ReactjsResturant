import React from "react"
class Header extends React.Component{
constructor(){
		super()
		this.state={retaurantname:""}
	}
	componentDidMount(){
		let proxy = "https://cors-anywhere.herokuapp.com/", 
		url="https://gist.githubusercontent.com/sharkyze/71efb42a5ee58c7a892bd0423f125802/raw/08655067e3bb69dc1c8cde68edc7f901c00b9205/restaurant-menu.json"
		fetch(proxy+url)
		.then(response => response.json())
		.then(backdata => {
			this.setState({retaurantname:backdata.array['restaurant-info'].name})
		})
	}
	render(){
		return(
			<div class="header">
				{this.state.retaurantname}
			</div>
  		)
	}

}
export default Header