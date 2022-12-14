import React from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundery from "../errorBoundary/ErrorBoundery";

import decoration from '../../resources/img/vision.png';


class App extends React.Component {

    state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader />
                <main>
                    <ErrorBoundery>
                        <RandomChar />
                    </ErrorBoundery>
                    <div className="char__content">
                        <ErrorBoundery>
                            <CharList onCharSelected={this.onCharSelected} />
                        </ErrorBoundery>
                        <ErrorBoundery>
                            <CharInfo charId={this.state.selectedChar} />
                        </ErrorBoundery>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision" />
                </main>
            </div>
        )
    }
}

export default App;