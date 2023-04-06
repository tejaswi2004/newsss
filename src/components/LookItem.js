
import React, { Component } from 'react'

export class LookItem extends Component {
    
render() {
    let { title, description, imageUrl,newsUrl } = this.props;
    return (
        <div className="my-3">
            <div className="card" >
                <img className="card-img-top" src={imageUrl} alt="...." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}
}
export default LookItem
