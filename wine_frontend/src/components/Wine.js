import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const txtColor={
  color:'white'
}
class Wine extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.wine.image_url} />
        </div>
        <Link to={'/winedetail/' + this.props.wine.id} style={txtColor}>{this.props.wine.name}</Link>
      </div>
    )
  };
}

// '/winedetail/:wineId'

export default Wine;