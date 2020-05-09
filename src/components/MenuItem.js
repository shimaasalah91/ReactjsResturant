import React from "react"
/*function MenuItem(props){
 

		return(
		<div>

                 <h1 class="menufont myfont"><b>{props.name}</b>
                 <span class="w3-right w3-tag w3-dark-grey w3-round menufont">$20</span>
                 </h1>
                  <p class="w3-text-grey menufont ">{props.description}</p>
                  <hr/>
            </div>
  		)
	

}*/
class MenuItem extends React.Component{
constructor(){
  super()
  this.state={
   
p:"price"
  }
}
componentDidMount(){

  this.props.item.map( result => {
                    console.log(result.price)

              this.setState({
                p:result.price
                //subitem:this.catdata['sub-items']

              }) 
            })
}
render(){
  console.log(this.state.p)
  return(
  <div>

                 <h1 class="menufont myfont"><b>{this.props.name}</b>
                 <span class="w3-right w3-tag w3-dark-grey w3-round menufont">${this.state.p}</span>
                 </h1>
                  <p class="w3-text-grey menufont ">{this.props.description}</p>
                  <hr/>
            </div>
    )
}

}
export default MenuItem