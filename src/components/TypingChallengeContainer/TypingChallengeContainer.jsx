import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import TypingChallenge from '../TypingChallenge/TypingChallenge'
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({
    words,
    characters,
    wpm,
    selectedParagraph,
    timeRemaining,
    timerStarted,
    testInfo,
    onInputChange,
    textValue,
    handleChange
}) =>{
    return (
        <div className="typing-challenge-container">
            {/* Details Section */}
            <div className="details-container">
                {/* words typed */}
                 <ChallengeDetailsCard  cardName="Words" cardValue={words} />
                {/* characters */}
                <ChallengeDetailsCard  cardName="Characters" cardValue={characters} />
                {/* wpm */}
                <ChallengeDetailsCard  cardName="W.P.M." cardValue={wpm} />
            </div>
            {/* The real challenge */}
            <div className="timerparatext">
                <TypingChallenge  
                    testInfo={testInfo} 
                    timeRemaining={timeRemaining} 
                    timerStarted={timerStarted} 
                    selectedParagraph={selectedParagraph}
                    onInputChange = {onInputChange}
                    textValue = {textValue}
                    handleChange = {handleChange}
                    />
                {/* <p>This is the real typing challenge</p> */}
            </div>
        </div>
    )
}

export default TypingChallengeContainer;