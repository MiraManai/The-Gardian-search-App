import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import Search from './components/Search.js'
import NewsList from './components/NewsList.js'
import SectionSearch from './components/SectionSearch.js'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Sports from './components/Sports'
import Music from './components/Music'
import Movies from './components/Movies'
import Politics from './components/Politics'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      word: '',
      posts: []
    }
    this.changeWord = this.changeWord.bind(this)
    this.searchWord = this.searchWord.bind(this)
    this.searchWord1 = this.searchWord1.bind(this)
  }

  changeWord (event) {
    this.setState({
      word: event.target.value
    })
  }

  searchWord (event) {
    axios.get('https://content.guardianapis.com/search?q=' +
      this.state.word + '&api-key=test&show-fields=starRating,headline,thumbnail')
      .then((response) => {
        this.setState((previouState) => {
          return {
            posts: response.data.response.results}
        }
        )
        console.log(response.data.response.results)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  searchWord1 (value) {
    axios.get('https://content.guardianapis.com/search?q=' +
      value + '&api-key=test&show-fields=starRating,headline,thumbnail')
      .then((response) => {
        this.setState((previouState) => {
          return {
            posts: response.data.response.results}
        }
        )
        console.log(response.data.response.results)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <img src='./IMG/The_Guardian_logo.jpg' className='' alt='logo' />
            <h1 className='App-title'>- The Gardian search App -</h1>
          </header>
          <main>
            <div className='intro'>
              <p className='App-intro '>
                    Latest US news, world news, sports, business, opinion, analysis and reviews from the Guardian, the world{"'"}s leading liberal voice.
                  </p>
              <div>
                <SectionSearch onClickSearch1={this.searchWord1} />
                <Search word={this.state.word}
                  onChangeWord={this.changeWord}
                  onClickSearch={this.searchWord} />
              </div>
            </div>

            <div>
              <Route exact path='/Sports' component={Sports} />
              <Route path='/Music' component={Music} />
              <Route path='/Movies' component={Movies} />
              <Route path='/Politics' component={Politics} />
              <NewsList res={this.state.posts} />
            </div>
          </main>

          <footer className='footer'>Created by
                <a href='https://github.com/MiraManai'
                  className='footer-link'>Mira</a>
          </footer>

        </div>
      </Router>
    )
  }
}

export default App
