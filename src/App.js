import React from 'react';
import './App.css';

class TodoItems extends React.Component{
  constructor(props){
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id){
    this.props.removeItem(id);
    console.log(id);
  }

  render(){
    return(
      <ul className='App-list'>
        {this.props.items.map((item, index) => 
            <li className='App-listitem' key={index}>
              <input type='checkbox'></input>
              {item}
              <button onClick={this.handleDelete.bind(this, item)} style={{float:'right',height:27,width:27,color:'yellow',backgroundColor:'red'}}>X</button>
            </li>
        )}
      </ul>
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
        <TodoItems items={this.state.items}  removeItem={this.removeItem} />
      </div>
    );
  }
}
/*
class Numbers extends React.Component{
  constructor(props){
    super(props);

    this.state = {count: 0};
  }

  componentDidMount(){
    setInterval(
      () => this.increase(),
      0
    ); 
  }

  increase(){
    this.setState({
      count: this.state.count + 1
    });
  }

  render(){
    return(
      <div>
        <p>{this.state.count}</p>
      </div>
    );
  }
}
*/
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
