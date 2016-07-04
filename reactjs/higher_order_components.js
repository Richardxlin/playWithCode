import React from 'react';

let Mixin = (InnerComponent) => class extends React.Component {
  constructor(){
    super()
    this.state = {
      counter: 0
    }
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({counter: this.state.counter + 1})
  }
  componentWillMount() {
    console.log('will mount')
  }
  render(){
    return (
      <div>
        <InnerComponent
        update={this.update}
        {...this.state}
        {...this.props} />
      </div>
    )
  }
  componentDidMount() {
    console.log('mounted')
  }
}

const Button = (props) => {
  return <button onClick={props.update}>
          {props.txt} - {props.counter}
         </button>
}

const PlusOneAdd = (props) => {
  return <a onMouseEnter={props.update}>
    {props.txt}: {props.counter}
    </a>
}

let ButtonMixed = Mixin(Button)
let PlusOneAddMixed = Mixin(PlusOneAdd)

class HigherOrderComponents extends React.Component {

  render(){
    return (
      <div>
        <ButtonMixed txt="Button" />
        <PlusOneAddMixed txt="Add One:" />
      </div>
    );
  }
}

export default HigherOrderComponents
