import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Wine extends Component{
  render(){
    return(
<div>
<img src="" />
<Link to='/winedetail/:wineId'><h3>Name: {this.props.wine.name}</h3></Link>
Price: {this.props.wine.price}
Pairiing description {this.props.wine.pairing}

</div>
    );
  }
}

export default Wine