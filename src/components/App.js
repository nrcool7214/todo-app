import React from 'react';
import '../css/App.scss';
import Navigation from './Navigation';
import ToDosContainer from './ToDosContainer';
import ToDonesContainer from './ToDonesContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, text: 'Wash my face!', done: false },
        { id: 1, text: 'Walk the dog', done: false },
        { id: 2, text: 'Pay the rent', done: false },
        { id: 3, text: 'Make so moneys', done: false },
        { id: 4, text: 'Make a website', done: true },
        { id: 5, text: 'Call my mom', done: true },
        { id: 6, text: 'Finish reading my book', done: true },
        { id: 7, text: 'Make more moneys', done: true }
      ]
    };
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

  render() {
    const toDos = this.state.items.filter(el => !el.done);
    const toDones = this.state.items.filter(el => el.done);
    console.log(this.state.items);

    return (
      <div className="app">
        <Navigation></Navigation>
        <ToDosContainer
          items={toDos}
          handleChange={this.updateItem}
        ></ToDosContainer>
        <ToDonesContainer items={toDones}></ToDonesContainer>
      </div>
    );
  }
}

export default App;
