
import React from "react"
import MenuItem from "./MenuItem"
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import queryString from 'query-string'

class Menu extends React.Component{
    constructor(){
    super()
    this.state={
      cat:[],
     MenuItems:[],
     type:"",
     items:[],
     catdata:[],
     subitem:[]


    }
  }
  componentDidMount(){
     const values = queryString.parse(this.props.location.search)
  console.log("hi "+values.type) // "top"
  this.setState({type:values.type})
    let proxy = "https://cors-anywhere.herokuapp.com/", 
    url="https://gist.githubusercontent.com/sharkyze/71efb42a5ee58c7a892bd0423f125802/raw/08655067e3bb69dc1c8cde68edc7f901c00b9205/restaurant-menu.json"
    fetch(proxy+url)
    .then(response => response.json())
    .then(resturantdata => {
     console.log("cat "+resturantdata.array['categorys'])

     this.setState({
      cat:resturantdata.array['categorys'],
        MenuItems:resturantdata.array.categorys[0]['menu-items'],
      })
     const data = this.state.cat.filter(user =>  user.name===this.state.type );

    data.map( result => {
              this.setState({
                catdata:result['menu-items'],
                //subitem:this.catdata['sub-items']

              }) 
            })

       
    })
  }
  
    render(){
    console.log("type "+this.state.type)
        const data = this.state.cat.filter(user =>  user.name===this.state.type );
        const menu = data[0];
console.log(data)
console.log(menu)
console.log(this.state.id)


const items=this.state.catdata.map(item =><MenuItem key={item.id} name={item.name} description={item.description} item={item['sub-items']}/>)
     return(
            <div>
  
             <h1 class="w3-center w3-jumbo menufont">THE MENU</h1>
            

               {items}
            
            </div>
        )
    }
}
export default Menu