import React from 'react'
import Nav from '../Nav/Nav';
import './App.css'
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';
import ChallengeSection from '../ChallengeSection/ChallengeSection';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                {/* Nav section */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Chanllenge Section */}
                <ChallengeSection />
                {/* Footer */}
                <Footer />
            </div>
        )
    }
}

export default App;