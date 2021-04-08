import React from 'react'
import './TestLetter.css'


const TestLetter = ({letterInfo}) =>{
    
    const {status} = letterInfo; // destructuring
    // let statusClass;

    const statusClass= {
        "correct": "test-letter-correct",
        "incorrect": "test-letter-incorrect",
        "notAttempted": "test-letter-notAttempted"
    }[status];

    //Above code is good alternative for below commented one
    // if(status==="correct"){
    //     statusClass = "test-letter-correct";
    // } else if(status==="incorrect"){
    //     statusClass = "test-letter-incorrect";
    // } else{
    //     statusClass = "test-letter-notAttempted";
    // }

    return(
        <span className={`test-letter ${statusClass}`}>{letterInfo.testLetter}</span>
    )
}

export default TestLetter;