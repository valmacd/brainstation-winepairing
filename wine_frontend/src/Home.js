import React from 'react';
import Form from './components/Form';
import axios from 'axios';

const grid = {
    display:'grid',
    gridTemplateRows:'1fr 2fr'
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            winelist: {
                foodpair : '',
                cost : '',
                sugar : '',
                colour: ''
            },  
            winechoices : []
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            winelist: {
            cost: e.target.cost.value,
            sugar: e.target.sugar.value,
            colour: e.target.colour.value
            }
        });   
    }

    componentDidUpdate = () => {
       axios.post('http://localhost:8080/wine', this.state.winelist)
        .then((results) => {
            console.log('success')
            console.log(results.data);
        })
        .catch((error) => {
            console.log('HIT A FUCKING ERROR')
            console.log(error);
        }); 
        // axios.get('http://localhost:8080/wine')
        // .then((results) => {
        //     console.log(results.data);
        //     // this.setState({
        //     //     winechoices: results.data
        //     // })
        // })
        // .catch((error) => {
        //     console.log(error);
        // }); 
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.setState({
            winelist: {
                foodpair: e.target.foodpair.value,
                cost: e.target.cost.value,
                sugar: e.target.sugar.value
            }
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
                    <Form submitHandler={this.submitHandler} />
                </div>
            </div>
        )
    };
}

export default Home;