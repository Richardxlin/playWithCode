import React from 'react';
import ReactDOM from 'react-dom';

class JSXCompiler extends React.Component {
  constructor() {
    super();
    this.state = {
      output: '',
      input: '',
      err: ''
    }
    this.update = this.update.bind(this);
    this.handleTabEvent = this.handleTabEvent.bind(this);
  }
  update(e){
    let code = e.target.value
    try {
      this.setState({
        output: babel.transform(code, {
          stage: 0,
          loose: 'all'
        }).code,
        err: ''
      })
    }catch(e){
      this.setState({err: e.message})
    }
  }
  handleTabEvent(e, stuff){
    const tabKey = 9;
    if (e.keyCode === tabKey){
      ReactDOM.findDOMNode(this.refs.ta).value +='\t'
      e.preventDefault()
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <header>{this.state.err}</header>
          <textarea
            ref="ta"
            onKeyDown={this.handleTabEvent}
            className="col-sm-6"
            onChange={this.update}
            defaultValue={this.state.input}>
          </textarea>
          <pre className="col-sm-6">{this.state.output}</pre>
        </div>
      </div>
    )
  }
}

export default JSXCompiler
