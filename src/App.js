import React from 'react';
import logo from './logo.svg';
import CreateItem from './CreateNewItem'
import DeleteLastItem from './DeleteLastItem'
import ItemList from './ItemList'
import './App.css';

class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleAddItem = event => {
    
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
    	<CreateItem onAddItem = {this.handleAddItem }/>
		<DeleteLastItem 
			onDeleteLastItem={this.handleDeleteLastItem}
			buttonDisables={this.noItemsFound}
		/>
	    <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
