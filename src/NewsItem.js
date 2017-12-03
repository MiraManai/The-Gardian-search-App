import React, { Component } from 'react';
import './NewsItem.css'

class NewsItem extends Component {
  render() {
    return (

        <div className="card news">
          <a href={this.props.el.webUrl} target='_blank' className="news-link">
            <img className="card-img-top" src={this.props.el.fields.thumbnail} alt="Card image cap"/>
            <div className="card-block">
              <h4 className="card-title news-title">{this.props.el.webTitle}</h4>
              <p className="card-text news-title">{this.props.el.webPublicationDate.slice(0, 10)}</p>
            </div>
          </a>
        </div>

  )
  }
}

export default NewsItem;
