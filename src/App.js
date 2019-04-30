import React from 'react';
import './App.css';

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
        <button onClick={this.props.handleDelete.bind(this, this.props.text)} style={{float:'right',height:27,width:27,color:'yellow',backgroundColor:'red'}}>X</button>
      </div>
    );
  }
}

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
    this.setState(prevState => ({
      items: prevState.items.filter(el => el !== id )
    }));
  }

  render(){
    return(
      <div>
        <TodoInput addItem={this.addItem}/>
        <ul className='App-list'>
          {this.state.items.map((item, index) => 
            <li className='App-listitem' key={index}>
              <TodoItem text={item} handleDelete={this.removeItem} />
            </li>
          )}
        </ul>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
