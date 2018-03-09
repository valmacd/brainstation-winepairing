import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const txtColor={
  color:'white'
}
const imgStyle = {
  width: '50%'
}
class Wine extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.wine.image_url} style={imgStyle} alt="Loading"/>
        </div>
        <Link to={'/winedetail/' + this.props.wine.id} style={txtColor}>{this.props.wine.name}</Link>
      </div>
    )
  };
}

// '/winedetail/:wineId'

export default Wine;