import React, { Component } from 'react';

class ReactComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        }
    }

    incAge = () => {
        this.setState({age : this.state.age += 1})
    }

    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{ lastName }, { this.props.firstName }</h1>
                <p>Age: { this.state.age }</p>
                <p>Hair Color: { hairColor }</p>
                <button onClick={this.incAge}>Birthday button for { firstName} { lastName }</button>
            </div>
        );
    }
}

export default ReactComponent;