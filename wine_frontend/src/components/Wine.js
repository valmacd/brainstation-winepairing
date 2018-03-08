import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wine extends Component {
  render() {
    return(
      <div>
        <img src={this.props.wine.image_url}/>
        <Link to={'/winedetail/' + this.props.wine.id}>Name: {this.props.wine.name}</Link>
      </div>
    )
  };
}

// '/winedetail/:wineId'

export default Wine;