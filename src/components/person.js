import React, { Component } from 'react'

export class Person extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.person.name}</h1>
            </div>
        )
    }
}

export default Person
