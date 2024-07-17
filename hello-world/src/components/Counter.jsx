import React, { Component } from 'react'
// import Pure from './Pure'
// import Memo from './Memo'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0,
        }
    }

    increment(){
        this.setState({
            count: 1
        })
        console.log(this.state.count)
    }
  render() {
    return (
      <div>
        {/* <Pure count ={ this.state.count}/> */}
       {/* <Memo count = {this.state.count}/> */}
        <button onClick={()=> this.increment()}>+</button>
      </div>
    )
  }
}
