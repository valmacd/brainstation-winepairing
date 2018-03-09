import React from 'react';
import {Link} from 'react-router-dom';
import Wine from './Wine';

const grid = {
    display: 'flex',
    marginTop:'3%'
}
// 'grid',
//     gridTemplateRows: 'auto auto',
//     gridTemplateColumns:'repeat(2, auto)'
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