import React from 'react';

function ComponentInES2015(){
  this.state = {
    counter: 0
  }
  this.update = this.update.bind(this)
  this.componentDidUpdate = function(prevProps, prevState) {
    console.log(prevState);
  }
}
ComponentInES2015.prototype = Object.create(React.Component.prototype);
ComponentInES2015.prototype.update = function update(){
  this.setState({counter: this.state.counter+1})
}
ComponentInES2015.prototype.render = function render(){
  return (
    <div>
      <button onClick={this.update}>{this.state.counter}</button>
    </div>
  )
}

export default ComponentInES2015
