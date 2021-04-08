import React from 'react'
import './TryAgain.css'


const TryAgain = ({
    words,
    characters,
    wpm,
    startAgain

}) =>{
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>
            <div className="result-container">
                <p>
                    <b>Characters</b> {characters}
                </p>
                <p>
                    <b>Words</b> {words}
                </p>
                <p>
                    <b>wpm</b> {wpm}
                </p>
            </div>

            <div>
                <button 
                onClick={()=>startAgain()}
                className="btn btn-info endbutton"
                onClick={()=>{
                    window.open("https://ekansh2112.github.io/flashtype/", "facebook-share-dialog","width=800,height=600")
                }}
                >Re-Try</button>
                <button
                onClick={()=>{
                    window.open("https://www.facebook.com/sharer.php?u=https://ekansh2112.github.io/flashtype/", "facebook-share-dialog","width=800,height=600")
                }}
                className="btn btn-primary endbutton">Facebook</button>
                <button 
                onClick={()=>{
                    window.open("https://twitter.com/intent/tweet?text=flashtype","width=800,height=600","Twitter")
                }}
                className="btn btn-primary endbutton">Twitter</button>
            </div>
        </div>
    )
}

export default TryAgain;