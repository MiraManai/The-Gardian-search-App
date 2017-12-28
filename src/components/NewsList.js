import React, { Component } from 'react'
import './NewsList.css'
import NewsItem from './NewsItem.js'

class NewsList extends Component {
  render () {
    return (
      <ul className='list-unstyled '>
        {
        this.props.res.map((el, i) => {
          return <div key={i}>
            <li className='news-list'>
              <NewsItem el={el} />
            </li>
          </div>
        })
      }
      </ul>
    )
  }
}

export default NewsList
