import React from 'react';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {items: []}
  
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
    }
  
    addItem(i){
      this.setState({ 
        items: this.state.items.concat([i])
      })
    }
  
    removeItem(id){
      this.state.items.splice(id, 1);
      /*this.setState(prevState => ({
        items: prevState.items.filter(el => el !== id )
      }));*/
  
      this.setState({
        items: this.state.items
      });
      console.log(id);
    }
    render(){
        return(
          <div>
            <TodoInput addItem={this.addItem}/>
            <ul className='App-list'>
              {this.state.items.map((item, index) => 
                <li className='App-listitem' key={index}>
                  <TodoItem id={index} text={item} handleDelete={this.removeItem} />
                </li>
              )}
            </ul>
          </div>
        );
    }
}

export default TodoList;