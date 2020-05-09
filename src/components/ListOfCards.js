import React from "react"
import HorizontalCard from "./HorizontalCard"
import Title from "./Title"
class ListOfCards extends React.Component{
	constructor(){
		super()
		this.state={
			categorys:[],
		}
	}
	componentDidMount(){
		let proxy = "https://cors-anywhere.herokuapp.com/", 
		url="https://gist.githubusercontent.com/sharkyze/71efb42a5ee58c7a892bd0423f125802/raw/08655067e3bb69dc1c8cde68edc7f901c00b9205/restaurant-menu.json"
		fetch(url)
		.then(response => response.json())
		
		.then(resturantdata => {

			this.setState({
				categorys:resturantdata.array.categorys
			})
		})
	}
	render(){
		const CardItems=this.state.categorys.map(card=><HorizontalCard url="https://source.unsplash.com/1600x900/?resturant"key={card.id} name={card.name}/>)
		return(
			<div class="twocols">
			{CardItems}
			</div>
  		)
	}

}
export default ListOfCards