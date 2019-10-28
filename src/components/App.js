import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  async componentDidMount() {
    const res = await axios.get(`http://localhost:3001/todos`);
    const items = res.data;
    this.setState({ items });
  }

  updateItem = id => {
    // We need to toggle the status of the item with `id`.
    const items = this.state.items.map(item => {
      if (item.id === id) {
        item.done = !item.done;
        return item;
      } else return item;
    });

    this.setState({ items });
  };

  addItem = value => {
    const newItem = { id: this.state.items.length, text: value, done: false };
    this.setState({
      items: [...this.state.items, newItem]
    });
    console.log(this.state.items);
  };

  render() {
    const toDos = this.state.items.filter(el => !el.done);
    const toDones = this.state.items.filter(el => el.done);

    return (
      <div className="app">
        <Navigation></Navigation>
        <ToDosContainer
          items={toDos}
          handleChange={this.updateItem}
          handleAddTodo={this.addItem}
        ></ToDosContainer>
        <ToDonesContainer
          items={toDones}
          handleChange={this.updateItem}
        ></ToDonesContainer>
      </div>
    );
  }
}

export default App;
