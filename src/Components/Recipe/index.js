import React, {Component} from 'react';
import {render} from 'react-dom';
import "./index.css"

class Recipe extends Component {
    constructor(props) {
        super();
    }

    render() {

        const {title, time, countIngredients, photoUrl, portion} = this.props;


        return (
            <div className={"recipe"}>
                <div>
                    <h1 className={"title"} style={{maxWidth: "20ch"}}>{title}</h1>
                </div>
                <div className={"imgCont"}>
                    {photoUrl.map((url, index) => (
                        photoUrl.length === 1 ? <img className={'centerPhoto'} key={index} src={url} alt="recipe photo"/> :
                            index === 0 ? <img className={'firstPhoto'} key={index} src={url} alt="recipe photo"/> :
                                index === 1 ? <img className={'secondPhoto'} key={index} src={url} alt="recipe photo"/> : null
                    ))}
                </div>

            </div>


        )
    }
}


export default Recipe