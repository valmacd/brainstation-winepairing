import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Wine extends Component{
  render(){
    return(
<div>
<Link to='/winedetail/:wineId'>Name: {this.props.wine.name}</Link>
</div>
    );
  }
}

export default Wine