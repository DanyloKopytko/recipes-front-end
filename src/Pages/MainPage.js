import React, { Component } from 'react';
import { render } from 'react-dom';
import Recipe from '../Components/Recipe'
import '../styles/MainPageStyles.css'
class MainPage extends Component {



    render() {
        const photo = [ 'https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/95e44cfe0abaddb03e43181d31a9f788/960x540'] ;
        return (
            <div className={"background"}>

                <div className={"middleBackground"}>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => (
                            <Recipe
                                title="Gavno"
                                photoUrl= {photo}
                                time=""
                                countIngredients=""
                                portion=""
                            />
                        ))

                    }
                </div>

            </div>


        )
    }
}



export default MainPage