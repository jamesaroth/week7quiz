import React, { Component } from 'react'
import Number from './Number'

export default class NumberButton extends Component {
  state = {
    nums: []
  }
  
  twentyArr = () => {
    let arr = []
    for (let i=0; i<20; i++) {
      arr.push(i)
    }
    return arr
  }

  clickHandler = event => {
    event.preventDefault();
    this.setState({nums: this.twentyArr()}
      
    )
  } 
  
    render() {
      let numberList = this.state.nums.map(
        (num, i) => <Number num={this.state.nums[i]} key={i}></Number>
      )

    return (
      <div>
        <button className="butt" onClick={this.clickHandler}>
            Press Me
        </button>
        <table>
          <tbody>
            {numberList}
          </tbody>
          
        </table>
        
      </div>
    )
  }
}
