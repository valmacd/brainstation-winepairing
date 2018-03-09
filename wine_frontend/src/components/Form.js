import React from 'react';
import {Link} from 'react-router-dom';

const grid = {
    display:'grid',
    gridTemplateColumns:'1fr 1fr 1fr',
    justifyItem: 'center'
}
const buttonGrid = {
    gridColumn: '2/3'
}

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.submitHandler} className='form' style={grid}>

                
                    <div>
                        <h1> Red or White </h1>
                        <select name="colour">
                            <option value="red">red wine</option>
                            <option value="white">white wine</option>
                        </select>
                    </div>

                    <div>
                        <h1> Cost </h1>
                        <select name="cost">
                            <option value="0-20">Less than $20</option>
                            <option value="20">$20 and Greater</option>
                        </select>
                    </div>

                    <div>
                        <h1> Sugar </h1>
                        <select name="sugar">
                            <option value="0-5">0-5 g/L</option>
                            <option value="5-10">5-10 g/L</option>
                            <option value="10-20">10-20 g/L</option>
                            <option value="20">more than 20 g/L</option>
                        </select>
                    </div>
                    
                    <div className='pickWine' style={buttonGrid}>
                        <button type='submit' value='Submit'>Pick a Wine for me</button>
                    </div>
                
            </form>
        )
    };
}

export default Form;
