import React from 'react'
import Nav from '../Nav/Nav';
import './App.css'
import Landing from '../Landing/Landing';

class App extends React.Component{
    render(){
        return(
            <div className="app">
                {/* Nav section */}
                <Nav />
                {/* Landing Page */}
                <Landing />
                {/* Chanllenge Section */}
                {/* Footer */}
            </div>
        )
    }
}

export default App;