import React from 'react';

const grid = {
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
}
const buttonGrid = {
    gridColumn: '2/3'
}

class Form extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.submitHandler} className='form' style={grid}>
                    
                        <div className='formItem'>
                            <h1> FoodPair </h1>
                            <select name="foodpair">
                                <option value="hamburger">Hamburger</option>
                                <option value="steak">Steak</option>
                                <option value="chicken">Chicken</option>
                            </select>
                        </div>

                        <div className='formItem'>
                            <h1> Cost </h1>
                            <select name="cost">
                                <option value="20">20 or less</option>
                                <option value="20-30">20-30</option>
                                <option value="30-50">30-50</option>
                                <option value="50">50 or greater</option>
                            </select>
                        </div>

                        <div className='formItem'>
                            <h1> Sugar </h1>
                            <select name="sugar">
                                <option value="0-5g">0-5 g/L</option>
                                <option value="5-10g">5-10 g/L</option>
                                <option value="10-20g">10-20 g/L</option>
                                <option value="20-30g">20-30 g/L</option>
                                <option value="30g">more than 30 g/L</option>
                            </select>
                        </div>

                        <div className='formSubmit' style={buttonGrid}>
                            <button type='submit' value='Submit' >Pick a Wine for me</button>
                        </div>
                    
                </form>
            </div>
        )
    };
}

export default Form;
