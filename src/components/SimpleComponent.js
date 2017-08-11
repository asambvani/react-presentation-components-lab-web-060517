// Code SimpleComponentHere Here
import React from 'react'

class SimpleComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mood: 'happy'
    }
  }
  updateMood = ()=>{
    this.setState({
      mood: (this.state.mood==='happy')? 'sad':'happy'
    })
  }
  render(){
    return (
      <div onClick={this.updateMood}>{this.state.mood}</div>
    )
  }
}

export default SimpleComponent
