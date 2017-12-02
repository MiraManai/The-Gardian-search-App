import React, { Component } from 'react';
import './NewsItem.css'

class NewsItem extends Component {
  render() {
    return (
    <div className='response-container'>
        <a href={this.props.el.webUrl} target='_blank'>
          <img className='d-flex mr-3' src={this.props.el.fields.thumbnail} />
          <div className="media-body">
            <h5 className="mt-0 mb-1">{this.props.el.webTitle}</h5>

            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>


        </a>
    </div>
  )
  }
}

export default NewsItem;
