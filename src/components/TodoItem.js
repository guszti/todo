import React from 'react';

class TodoItem extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {isChecked: false};
  
      this.handleCheck = this.handleCheck.bind(this);
    }
  
    handleCheck(){
      this.setState({
        isChecked: !this.state.isChecked
      });
    }
  
    render(){
      return(
        <div>
          <input type='checkbox' onChange={this.handleCheck}></input>
            {this.state.isChecked ? <del>{this.props.text}</del> : this.props.text}
          <button onClick={this.props.handleDelete.bind(this, this.props.id)} style={{float:'right',height:27,width:27,color:'yellow',backgroundColor:'red'}}>X</button>
        </div>
      );
    }
  }

  export default TodoItem;