import React from 'react';

const style={
    marginTop: "3%",
    contentAlign:'center'
}
const imgSize={
    width: "35%"
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
                    <h1>{'Name: ' + this.props.winechoice[i].name}</h1>
                        <img src={this.props.winechoice[i].image_url} style={imgSize} alt="Loading"/>
                        <ul>
                            <li>{'Name: ' + this.props.winechoice[i].name}</li>
                            <li>{'Producer Name: ' + this.props.winechoice[i].producer_name}</li>
                            <li>{'$ ' + (this.props.winechoice[i].price_in_cents)/100}</li>
                            <li>{'Style: ' + this.props.winechoice[i].style}</li>
                            <li>{'Tasting Note: ' + this.props.winechoice[i].tasting_note}</li>
                            <li>{'Food Pairing Suggestion: ' + this.props.winechoice[i].serving_suggestion}</li>
                            <li>{`Quantity in Stock ` + Number(this.props.winechoice[1].quantity)}</li>
                        </ul>
                    </div>
                )
            }
        }
    }
    render(){
        return(
            <div>
                {this.fieldEmpty()}
                <button onClick={this.goBackPage} type='back' name='back'>Go Back to Wine List</button>
            </div>
        )
    };
}

export default WineDetail;