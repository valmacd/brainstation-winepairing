import React from 'react';
import Wine from './Wine';

const grid = {
    display: 'flex',
    marginTop:'3%'
}
class WineList extends React.Component {
    render() {
        let wine = this.props.winechoice.map(wine=>
            <Wine wine={wine} />
        )
        return (
            <div style={grid}>
                {wine}
            </div>
        )
    };
}

export default WineList;