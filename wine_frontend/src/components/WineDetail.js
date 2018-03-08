import React from 'react';

class WineDetail extends React.Component {

    fieldEmpty = () => {
        return (
            <li>{this.props.winechoice.image_thumb_url}</li>
            <li>{'Name: ' + this.props.winechoice.name}</li>
            <li>{'Producer Name: ' + this.props.winechoice.producer_name}</li>
            <li>{'$ ' + (this.props.winechoice.price_in_cents)/100}</li>
            <li>{'Style: ' + this.props.winechoice.style}</li>
            <li>{'Tasting Note: ' + this.props.winechoice.tasting_note}</li>
            <li>{'Food Pairing Suggestion: ' + this.props.winechoice.serving_suggestion}</li>
        )
    }


    render(){
        return(
            <h1> Wine Details </h1>
            
        )
    };
}

export default WineDetail;