import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-9 align-center">
                <br/>
                <br/>
                <br/>
                   L'oreal Paris - {this.props.count} products
                </div>
                <div className="col-md-3"></div>                
            </div>
        )
    }
}
