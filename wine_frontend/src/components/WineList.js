import React from 'react';
import {Link} from 'react-router-dom';
import Wine from './Wine';

const grid = {
    display: 'grid',
    gridTemplateRows:'1fr 1fr 1fr'
}

class WineList extends React.Component {
    render() {
        let wine = this.props.winechoice.map(wine=>
            <Wine wine={wine} />
        )
        return (
            <div>
                <h1>I am the wineList</h1>
                {wine}
            </div>
        )
    };
}

export default WineList;