import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor() {
    super()
    this.state={
      allSushi: [],
      money: 100,
      displayedSushi: 0,
      eatenSushi: []
    }
  }

  componentDidMount(){
    fetch(API)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        this.setState({
          allSushi: data
        })
      })
  }

  nextFourSushi = () => {
    this.setState({
      displayedSushi: this.state.displayedSushi + 4,

    })
  }

  buySushi = (sushi) => {
    console.log("buy sushi")
    let wallet = this.state.money
    this.setState({
      money: wallet - sushi.price
    })
  }

  eatSushi = (sushi) => {
    console.log("eat sushi")
    let wallet = this.state.money
    let eatenSushiCopy = [...this.state.eatenSushi]
    eatenSushiCopy.push(sushi.id)
    this.setState({
      eatenSushi: eatenSushiCopy,
      money: wallet - sushi.price
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          buySushi={this.buySushi}
          eatenSushi={this.state.eatenSushi}
          eatSushi={this.eatSushi}
          nextFour={this.nextFourSushi}
          displayedSushi={this.state.allSushi.slice(this.state.displayedSushi, (this.state.displayedSushi + 4))} />
        <Table money={this.state.money} eatenSushi={this.state.eatenSushi} />
      </div>
    );
  }
}

export default App;
