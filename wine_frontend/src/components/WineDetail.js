import React from 'react';

const style={
    marginTop: "3%",
    textAlign:'left'
}
const imgSize={
    width: "15%",
    float: 'left',
    margin: '3%',
    marginTop: '0%'
}
const moveName = {
    marginLeft: '3%'
}
class WineDetail extends React.Component {
    goBackPage = () => {
        this.props.history.push('/winelist');
    }
    fieldEmpty = () => {
        let wineId = Number(this.props.match.params.wineId);
        // debugger;
        for (let i=0; i< this.props.winechoice.length; i++) {
            if (wineId === this.props.winechoice[i].id){
                return (
                    <div style={style}>
                    <h1 style={moveName}>{ this.props.winechoice[i].name}</h1>
                        <img src={this.props.winechoice[i].image_url} style={imgSize} alt="Loading"/>
                        <ul>
                            <li>{'Producer Name: ' + this.props.winechoice[i].producer_name}</li>
                            <li>{'$ ' + (this.props.winechoice[i].price_in_cents)/100}</li>
                            <li>{'Style: ' + this.props.winechoice[i].style}</li>
                            <li>{'Tasting Note: ' + this.props.winechoice[i].tasting_note}</li>
                            <li>{'Food Pairing Suggestion: ' + this.props.winechoice[i].serving_suggestion}</li>
                            <li>{`Quantity in Stock ` + Number(this.props.winechoice[1].quantity)}</li>
                        </ul>
                        <button onClick={this.goBackPage} type='back' name='back'>Go Back to Wine List</button>
                    </div>
                )
            }
        }
    }
    render(){
        return(
            <div>
                {this.fieldEmpty()}
            </div>
        )
    };
}

export default WineDetail;