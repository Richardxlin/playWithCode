import React from 'react';
import ReactDOM from 'react-dom';
import ChildProp from './childprop';
import LifeCycle from './lifecycle';
import HigherOrderComponents from './higher_order_components';
//for some reason higher_order_components_in_es5 does not work
import ComponentInES2015 from './component_in_es2015';
import ComposableComponent from './composable_component';
import DataGeneratedComponents from './data_generated_component';
import JSXCompiler from './jsx_live_compiler_component';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this)
  }

  update(e){
    this.setState({
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
    })
  }

  render(){
    return (
      <div>
        <ComponentTitles title="Refs"/>
        <Slider ref="red" update={this.update}/>
        {this.state.red}
        <br />
        <Slider ref="green" update={this.update}/>
        {this.state.green}
        <br />
        <Slider ref="blue" update={this.update}/>
        {this.state.blue}
        <hr />
        <ComponentTitles title="Child Prop"/>
        <ChildProp />
        <hr />
        <ComponentTitles title="Life Cycle" />
        <LifeCycle />
        <hr />
        <ComponentTitles title="Higher Order Components" />
        <HigherOrderComponents />
        <ComponentTitles title="Component in ES5" />
        <ComponentInES2015 />
        <ComponentTitles title="Composable Component" />
        <ComposableComponent />
        <ComponentTitles title="Data Generated Component" />
        <DataGeneratedComponents />
        <ComponentTitles title="Live JSX Compiler" />
        <JSXCompiler />
      </div>
    )
  }
}

class ComponentTitles extends React.Component {
  render() {
    return <h3>{this.props.title}</h3>
  }
}

class Slider extends React.Component {
  render(){
    return (
      <div>
        <input type="range"
          ref="inp"
          min="0"
          max="255"
          onChange={this.props.update} />
      </div>
    )
  }
}

export default App
