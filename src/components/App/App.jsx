import React from 'react'
import Nav from '../Nav/Nav';
import './App.css'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';


const totalTime= 60;
class App extends React.Component{
    
    state ={
        selectedParagraph: "My name is Ekansh Gupta",
        timerStarted: false,
        timeRemaining: totalTime,
        words: 0,
        characters: 0,
        wpm: 0,
    }
    
    render(){
        return(
            <div className="app">
                {/* Nav section */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Chanllenge Section */}
                <ChallengeSection 
                    selectedParagraph = {this.state.selectedParagraph}
                    words = {this.state.words}
                    characters = {this.state.characters}
                    wpm = {this.state.wpm}
                    timeRemaining = {this.state.timeRemaining}
                    timerStarted = {this.state.timerStarted}
                />
                {/* Footer */}
                <Footer />
            </div>
        )
    }
}

export default App;