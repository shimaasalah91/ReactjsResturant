import React, { Component } from 'react';
import ListOfCards from "./components/ListOfCards"
class Categories extends Component {
  render() {
    return (
        <div>
        <h1 class="myfont"> Categories </h1>
          <ListOfCards/>
        </div>
    );
  }
}

export default Categories;