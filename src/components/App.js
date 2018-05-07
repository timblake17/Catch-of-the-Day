import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';




class App extends React.Component{
  state ={
    fishes:{

    },
    order: {}
  }

  addFish = fish => {
    ///take copy of existing state
    const fishes = {...this.state.fishes};
    /// add new fish to fishes variable
    fishes[`fish${Date.now()}`]=fish;
    //set new fishes object to state
    this.setState({fishes})
  }

  loadSampleFishes=() => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    //take copy of state
    const order = {...this.state.order};
    //add to order or update number in order
    order[key] = order[key] + 1 || 1;
    ///cal setstate to update our state object
    this.setState({ order });
  }
  render(){
    return(
      <div className="catch-of-the-day">
        <div className="menu">
        <Header tagline="Fresh Seafood Market"/>
        <ul className="fishes">
          {Object.keys(this.state.fishes).map(key =>(
            <Fish
              key={key}
              index={key}
              details={this.state.fishes[key]}
              addToOrder={this.addToOrder}
            />
          ))}
        </ul>
        </div>
      <Order fishes={this.state.fishes} order={this.state.order}/>
      <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
      </div>

    )
  }
}

export default App;
