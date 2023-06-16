import { Component } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';

import './App.css';

class App extends Component {

  state = {
    contacts: [],
    name: '',
  }

  onFormHandlerSubmit = (data) => {
    console.log(data);
    const addedName = data.name;
    return addedName;
  }

  onAddName(data) {
    // this.contacts.push(name);
    this.setState(prevNames => {
      this.contacts = [...prevNames, data.name];
    })
  }
  
  render() {
    const {contacts, name} = this.state;

    return (
      <div className="App">
        <AddContact contacts={contacts} name={name} onFormSubmit={this.onFormHandlerSubmit}/>

        <Contacts name={this.state.name} onAddName={this.onAddName}/>
      </div>
    );
  }
}

export default App;
