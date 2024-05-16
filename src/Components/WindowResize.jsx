import React, { Component } from 'react'

export default class WindowResize extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        this.handleResize = this.handleResize.bind(this)
    }
    componentDidMount() {
        window.addEventListener("resize", this.handleResize)
    }
    handleResize() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    render() {
        return (
            <div>
                <h3>WindowResize</h3>
                <h4>Width: {this.state.width}</h4>
                <h4>Height: {this.state.width}</h4>
            </div>
        )
    }
}
