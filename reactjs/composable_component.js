import React from 'react';
import ReactDOM from 'react-dom';

class ComposableComponent extends React.Component {
  constructor(){
    super();
    this.state = {
      inputComponent: 0
    }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({
      inputComponent: ReactDOM.findDOMNode(this.refs.comp.refs.inp).value
    })
  }
  render(){
    return <NumInput ref="comp"
      min={0}
      max={225}
      step={0.1}
      val={+this.state.inputComponent}
      type="number"
      label="Target Number"
    update={this.update}/>
  }

}

class NumInput extends React.Component {
  render(){
    let label = this.props.label !== '' ?
    <label>{this.props.label}: {this.props.val}</label> : ''
    return (
      <div>
        <input ref="inp"
          type={this.props.type}
          min={this.props.type}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.val}
          onChange={this.props.update} />
          {label}
      </div>
    )
  }
}

NumInput.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  step: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range'])
}

NumInput.defaultProps = {
  min: 0,
  max: 0,
  step: 1,
  val: 0,
  label: '',
  type: 'range'
}

export default ComposableComponent
