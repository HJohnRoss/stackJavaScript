import React, { Component } from 'react';

class ReactComponent extends Component {
    render() {
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h1>{ this.props.lastName }, { this.props.firstName }</h1>
                <p>Age: { this.props.age }</p>
                <p>Hair Color: { this.props.hairColor }</p>
            </div>
        );
    }
}

export default ReactComponent;