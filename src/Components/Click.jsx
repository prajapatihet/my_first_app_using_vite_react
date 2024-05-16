import React, { Component } from 'react'

export default class Click extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: this.props.message,
            number: 0
        }
        this.updateMessage = this.updateMessage.bind(this)
        this.increment = this.increment.bind(this)
    }
    increment() {
        this.setState({
            number: this.state.number + 1
        })
    }
    updateMessage() {
        if (this.state.message === this.state.message.toUpperCase()) {
            this.setState({
                message: this.state.message.toLowerCase()
            })
        }
        else {
            this.setState({
                message: this.state.message.toUpperCase()
            })
        }

    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.updateMessage}>Click me</button>
                <button onClick={this.increment}>Number: {this.state.number}</button>
            </div>
        )
    }
}
