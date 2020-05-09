import React from "react"

class MemeGenerator extends React.Component{
	constructor(){
		super()
		this.state={
			allMemeImgs:[],
			topText:"",
			bottomText:"",
			randomImg:""
		}
		this.handleChange=this.handleChange.bind(this)
		this.generateImg=this.generateImg.bind(this)
	}
	handleChange(event){
		return(
			this.setState({
				[event.target.name]:event.target.value
			})
			)
	}
	generateImg(event){
	
			 event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg })
			
	}
	componentDidMount(){
		let proxy="https://cors-anywhere.herokuapp.com/",
		url="https://api.imgflip.com/get_memes"
		fetch(proxy+url)
		.then(response => response.json())
		.then(dataBack => {
					console.log(dataBack.data.memes)

			this.setState({allMemeImgs:dataBack.data.memes})
		})

  		
	}
	render(){
		return(
				<div>
				<form>
				<input 
					type="text"
					placeholder="enter top Tex"
					name="topText"
					value={this.state.topText}
					onChange={this.handleChange}
				/>
				<br/>
				<input 
					type="text"
					placeholder="enter bottom Tex"
					name="bottomText"
					value={this.state.bottomText}
					onChange={this.handleChange}

				/>
				
				<br/>
				<button class="button" onClick={this.generateImg}>Generate</button>
				</form>

				<div class="meme">
  				<p class="top">{this.state.topText}</p>
  				<img src={this.state.randomImg}/>

 				 <p class="bottom">{this.state.bottomText}</p>
				</div>
				</div>

			)
	}
}
export default MemeGenerator