import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import WineDirectory from './components/WineDirectory'

const grid = {
    display:'grid',
    gridTemplateRows:'1fr auto'
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            winelist: {
                cost : '',
                sugar : '',
                colour: ''
            },  
            winechoice : []
        }
    }
    submitHandler = (e) => {
        e.preventDefault();
        let winelistInput = {
            cost: e.target.cost.value,
            sugar: e.target.sugar.value,
            colour: e.target.colour.value
        }
        axios.post('http://localhost:8080/wine', winelistInput)
        .then((results) => {
            console.log('success')
            console.log(results.data.randomList);
            this.setState({
                winechoice: results.data.randomList
            })
        })
        .catch((error) => {
            console.log("Ya Dun Goof'd")
            console.log(error);
        }); 
        this.setState({
            winelist: winelistInput
        }); 
    }

    render() {
        return (
            <div style={grid}>
                <div className='item1'>
                    <h1>VQA Sommelier</h1>
                    <h3>Discover Canadian Wine</h3>
                </div>
                <div className="item2">
                    <Form submitHandler={this.submitHandler} makeRequest={this.makeRequest}/>
                </div>
                <WineDirectory winechoice={this.state.winechoice} />
            </div>
        )
    };
}

export default Home;