import React from 'react';
import './form.css';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className="form"><input type="number" ref={input => this.props.number = input}/><button type="button">Guess</button></div>
        )
    }
}