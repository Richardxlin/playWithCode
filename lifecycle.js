import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
  constructor() {
   super();
   this.state = {counter: 0}
   this.update = this.update.bind(this)
  }
  update() {
    this.setState({counter: this.state.counter + 1 * this.state.m})
  }
  componentWillMount(){
    this.setState({m: 2})
  }
  componentWillReceiveProps(nextProps) {
    this.setState({moreThanThree: nextProps.val > 3})
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter > 3;
  }
  render() {
    console.log('rendering')
    return <button onClick={this.update}>{this.state.counter}</button>
  }
  componentDidMount(){
    this.inc = setInterval(this.update, 500)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prevState', prevState)
  }
  componentWillUnmount(){
    clearInterval(this.inc)
  }
}

class LifeCycle extends React.Component {
  constructor() {
    super();
    this.mount = this.mount.bind(this)
    this.unmount = this.unmount.bind(this)
  }
  mount(){
    ReactDOM.render(
      <Counter />, document.getElementById('counter')
    )
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('counter'))
  }
  render(){
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="counter"></div>
      </div>
    )
  }
}

export default LifeCycle
