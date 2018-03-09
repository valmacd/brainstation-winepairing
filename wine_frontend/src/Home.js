import React from 'react';
import Form from './components/Form';
import axios from 'axios';
import { Route, Switch, withRouter } from 'react-router-dom';
import WineList from './components/WineList';
import WineDetail from './components/WineDetail';

const grid = {
    display: 'grid',
    gridTemplateRows: '1fr auto'
}

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            winelist: {
                cost: '',
                sugar: '',
                colour: ''
            },
            winechoice: []
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
        this.props.history.push('/winelist')
    }

    render() {
        return (
            <div style={grid}>
                <div className='item1'>
                    <h1>VQA Sommelier</h1>
                    <h3>Discover Canadian Wine</h3>
                </div>
                <div className="item2">
                    <Form submitHandler={this.submitHandler} makeRequest={this.makeRequest} />
                </div>
                <Switch>
                    <Route path='/winedetail/:wineId' render={(props) => <WineDetail match={props.match} history={props.history} winechoice={this.state.winechoice}/>} />
                    <Route path='/winelist' render={(props) => <WineList winechoice={this.state.winechoice} />} />
                </Switch>
            </div>
        )
    };
}

export default withRouter(Home);
