import React from 'react';
import './game.css';
import './instruction';
import './form'
export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            feedback: 'Make a Guess!',
            guessCount: 0,
            guesses: [],
            answer: Math.floor(Math.random()*100)
        }
    }
    render() {
        return (
            <div>
            <div className="feedback-section"></div>
            <div className="counter"></div>
            <div className="guesses"></div>
            </div>
        )
    }
}

