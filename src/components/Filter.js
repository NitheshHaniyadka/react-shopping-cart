import React, { Component } from 'react'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-results">
                   L'oreal Paris - {this.props.count} products
                </div>
            <div className="filter-sort">
                <label>Order By
                    <select className="form-control" value={this.props.sort} onChange={this.props.handleChangeSort}>
                        <option value="">Select</option>
                        <option value="lowest">Lowest to Highest</option>
                        <option value="highest">Highest to Lowest</option>
                    </select>
                </label>
            </div>
                
            </div>
        )
    }
}
