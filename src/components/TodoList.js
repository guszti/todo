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
      this.itemUp = this.itemUp.bind(this);
      this.itemDown = this.itemDown.bind(this);
      this.handleCheck = this.handleCheck.bind(this);
    }
  
    componentDidMount(){
      //localStorage.clear();
      if(localStorage.getItem('items') !== null){
        this.setState({
          items: JSON.parse(localStorage.getItem('items'))
        });
      }
    }

    componentDidUpdate(){
      const items = this.state.items;
      localStorage.setItem('items', JSON.stringify(items));
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
    }

    itemUp(id){
      if(id > 0){
        const newList = this.state.items;
        const temp = newList[id-1];

        newList[id-1] = newList[id];
        newList[id] = temp;

        this.setState({
          items: newList
        });
      }
    }

    itemDown(id){
      if(id < this.state.items.length - 1){
        const newList = this.state.items;
        const temp = newList[id+1];

        newList[id+1] = newList[id];
        newList[id] = temp;

        this.setState({
          items: newList
        });
      }
    }

    handleCheck(id){
      const newList = this.state.items;
      newList[id].checked = !newList[id].checked;

      this.setState({
        items: newList
      });
    }

    render(){
        return(
          <div>
            <TodoInput addItem={this.addItem}/>
            <br />
              {this.state.items !== null ? this.state.items.map((item, index) => 
                <div className='App-listitem' key={index}>
                  <TodoItem id={index} todoItem={item} handleDelete={this.removeItem} itemUp={this.itemUp} itemDown={this.itemDown} handleCheck={this.handleCheck} />
                </div>
              ) : ''}
            <br/>
            {this.state.last ? <button onClick={this.restoreItem}>Restore deleted item</button> : ''}
          </div>
        );
    }
}

export default TodoList;