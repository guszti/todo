import React from 'react';

class TodoInput extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {in: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e){
      this.setState({in: e.target.value});
    }
  
    handleSubmit(e){
      e.preventDefault();
      if(this.state.in != ''){
        this.props.addItem(this.state.in);
      }
    }
  
    render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input className='App-input' type='text' name='name' value={this.state.in} onChange={this.handleChange} />
            <input className='App-button' type='submit' value='add todo' />
          </form>
        </div>
      );
    }
  }

  export default TodoInput;