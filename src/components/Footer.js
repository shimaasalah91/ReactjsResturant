import React from "react"
//<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/fb-heart.gif" />
class Footer extends React.Component{
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
			<footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">

                <h5 class="white-text">{this.state.retaurantname} Resturant</h5>
                <p class="grey-text text-lighten-4" >
                Mmmmm… Toasty!
                <br/>
                
                </p>
              </div>
             
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2020 Copyright for Shimaa Salah
            </div>
          </div>
        </footer>
            
			)
	}
}
export default Footer 