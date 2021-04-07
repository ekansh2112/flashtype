import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import  './TestContainer.css'


const TestContainer = (
    {
    words,
    characters,
    wpm,
    selectedParagraph,
    timeRemaining,
    timerStarted
}
) =>{


    return (
        <div className="test-container">


            {
              timeRemaining>0? (
                <div className="typing-challenge-cont" data-aos="fade-up">
                <TypingChallengeContainer 
                words={words} 
                characters={characters} 
                wpm={wpm}
                selectedParagraph = {selectedParagraph}
                timeRemaining = {timeRemaining}
                timerStarted = {timerStarted}  
                  />
            </div>
              ) : (<div className="try-container">
              <TryAgain words={words} characters={characters} wpm={wpm} />
          </div>)
            }
           
            
        </div>
    )
}

export default TestContainer;