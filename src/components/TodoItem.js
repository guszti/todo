import React from 'react';

class TodoItem extends React.Component{
    render(){
      return(
        <div>         
          {this.props.todoItem.checked ? <input type='checkbox' onChange={this.props.handleCheck.bind(this, this.props.id)} checked></input> : <input type='checkbox' onChange={this.props.handleCheck.bind(this, this.props.id)}></input>}
          {this.props.todoItem.checked ? <del>   {this.props.todoItem.title}</del> : '   ' + this.props.todoItem.title}
          <button onClick={this.props.handleDelete.bind(this, this.props.id)} style={{float:'right',height:27,width:27,color:'yellow',backgroundColor:'red'}}>X</button>
          <button onClick={this.props.itemDown.bind(this, this.props.id)} style={{float:'right',height:27,width:27,color:'yellow',backgroundColor:'blue'}}>-</button>
          <button onClick={this.props.itemUp.bind(this, this.props.id)} style={{float:'right',height:27,width:27,color:'yellow',backgroundColor:'blue'}}>+</button>
          <small style={{float:'right',paddingRight:'10px',fontSize:12,paddingTop:'7px'}}>{this.props.todoItem.date}</small>
        </div>
      );
    }
  }

  export default TodoItem;