import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import Search from './Search.js'
import NewsList from './NewsList.js'


class App extends Component {
  constructor(props){
  super(props)
  this.state ={
    word : '',
    posts : []
    }
    this.changeWord = this.changeWord.bind(this)
    this.searchWord = this.searchWord.bind(this)
  }

  changeWord(event){
    this.setState ({
      word : event.target.value
    })
    console.log(this.state.word)
  }

  searchWord(event){
    console.log("clicked !")
    axios.get('https://content.guardianapis.com/search?q='+ this.state.word +'&api-key=test&show-fields=starRating,headline,thumbnail')
      .then((response) => {
        this.setState({posts: response.data.response.results});
        console.log(response.data.response.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="./IMG/The_Guardian_logo.jpg" className="" alt="logo" />
          <h1 className="App-title">- The Gardian search App -</h1>
        </header>
        <main>
            <div className="intro">
              <p className="App-intro ">
                Latest US news, world news, sports, business, opinion, analysis and reviews from the Guardian, the world{"'"}s leading liberal voice.
              </p>

              <div>
                <Search word={this.state.word} onChangeWord={this.changeWord} onClickSearch={this.searchWord}/>
              </div>

            </div>

            <div>
              <NewsList res={this.state.posts} />
            </div>
        </main>

      </div>
    )
  }
}

export default App;
