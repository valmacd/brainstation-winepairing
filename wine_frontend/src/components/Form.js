import React from 'react';

class Form extends React.Component {
    render(){
        return(
            <form onSubmit={this.props.submitHandler} className='form'>
                <div className='row'>
                    <div className='col-12 col-md-3'>
                        <h1> Red or White </h1>
                        <select name="colour">
                            <option value="red">red wine</option>
                            <option value="white">white wine</option>
                        </select>
                    </div>
                    <div className='col-12 col-md-3'>
                        <h1> FoodPair </h1>
                        <select name="foodpair">
                            <option value="hamburger">Hamburger</option>
                            <option value="steak">Steak</option>
                            <option value="chicken">Chicken</option>
                        </select>
                    </div>
                    <div className='col-12 col-md-3'>
                        <h1> Cost </h1>
                        <select name="cost">
                            <option value="20">20 or less</option>
                            <option value="20-30">20-30</option>
                            <option value="30-50">30-50</option>
                            <option value="50">50 or greater</option>
                        </select>
                    </div>
                    <div className='col-12 col-md-3'>
                        <h1> Sugar </h1>
                        <select name="sugar">
                            <option value="0-5">0-5 g/L</option>
                            <option value="5-10">5-10 g/L</option>
                            <option value="10-20">10-20 g/L</option>
                            <option value="20-30">20-30 g/L</option>
                            <option value="30">more than 30 g/L</option>
                        </select>
                    </div>
                    {/* <div className='col-12 col-md-3'>
                        <h1> Location </h1>
                        <div>
                            <input type="checkbox" name="ontario" />
                            <label for="ontario">Ontario</label>
                        </div>
                        <div>
                            <input type="checkbox" name="britishColumbia" />
                            <label for="britishColumbia">British Columbia</label>
                        </div>
                    </div> */}
                    <div className='col-12 col-md-12'>
                        <button type='submit' value='Submit' >Pick a Wine for me</button>    
                    </div>
                </div>
            </form>
        )
    };
}

export default Form;
