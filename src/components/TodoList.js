import React from 'react';
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
    constructor(props){
      super(props);
  
      this.state = {
        items: [],
        last: null
      };
  
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.restoreItem = this.restoreItem.bind(this);
    }
  
    restoreItem(){
      const itemToRestore = this.state.last;
      const newList = this.state.items;
      newList.splice(itemToRestore.id, 0, itemToRestore.title);

      this.setState({
        items: newList,
        last: null
      });
    }

    addItem(i){
      this.setState({ 
        items: this.state.items.concat([i])
      })
    }
  
    removeItem(id){
      const lastDeleted = {
        id: id,
        title: this.state.items[id]
      };

      const newList = this.state.items;
      newList.splice(id, 1);
  
      this.setState({
        items: newList,
        last: lastDeleted
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
                  <TodoItem id={index} todoItem={item} handleDelete={this.removeItem} />
                </li>
              )}
            </ul>
            <br/>
            {this.state.last ? <button onClick={this.restoreItem}>Restore deleted item</button> : ''}
          </div>
        );
    }
}

export default TodoList;