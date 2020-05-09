import React from "react"
import ImageGallery from 'react-image-gallery';


import "react-image-gallery/styles/css/image-gallery.css";

class ImgGallery extends React.Component{
constructor(){
    super()
    this.state={
      isLoading:true
    }
  }
  componentDidMount(props){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    }
    ,1500)
  }
	render(){
		
    const images = [
      {
        original: 'https://source.unsplash.com/1600x900/?resturant,tasty',
        thumbnail: 'https://source.unsplash.com/1600x900/?resturant,tasty',
      },
      {
        original: 'https://source.unsplash.com/1600x900/?fastfood',
        thumbnail: 'https://source.unsplash.com/1600x900/?fastfood',
      },
      {
        original: 'https://source.unsplash.com/1600x900/?Dessert',
        thumbnail: 'https://source.unsplash.com/1600x900/?Desserts',
      },
       {
        original: 'https://source.unsplash.com/1600x900/?Salads',
        thumbnail: 'https://source.unsplash.com/1600x900/?Salads',
      },
      {
        original: 'https://source.unsplash.com/1600x900/?icecream',
        thumbnail: 'https://source.unsplash.com/1600x900/?icecream',
      },
      {
        original: 'https://source.unsplash.com/1600x900/?Burgers',
        thumbnail: 'https://source.unsplash.com/1600x900/?Burgers',
      },
    ];

    return (
      <div>
      {
        this.state.isLoading ?
        <center>
      <div class="preloader-wrapper big active">
      <div class="spinner-layer spinner-blue">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div><div class="gap-patch">
          <div class="circle"></div>
        </div><div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
      </div>
      </center>
    :
      <ImageGallery items={images} />
      }
      </div>
    );
	}

}
export default ImgGallery