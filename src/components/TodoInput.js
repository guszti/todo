import React from 'react';

class TodoInput extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        inTitle: '',
        inDate: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e){
      this.setState({ [e.target.name]: e.target.value });
      //this.setState({inTitle: e.target.value});
    }
  
    handleSubmit(e){
      e.preventDefault();
      if(this.state.inTitle != ''){
        const todoItem = {
          title: this.state.inTitle,
          date: this.state.inDate
        };
        this.props.addItem(todoItem);
      }
    }
  
    render(){
      return(
        <div>
          <form onSubmit={this.handleSubmit}>
            <input className='App-input' placeholder='enter title' type='text' name='inTitle' value={this.state.inTitle} onChange={this.handleChange} />
            <input className='App-input' placeholder='add date' type='text' name='inDate' value={this.state.inDate} onChange={this.handleChange} />
            <input className='App-button' type='submit' value='add todo' />
          </form>
        </div>
      );
    }
  }

  export default TodoInput;