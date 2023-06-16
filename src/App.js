import { Component } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';

import './App.css';

class App extends Component {

  state = {
    contacts: [],
    name: '',
  }

  onAddName(name) {
    // this.contacts.push(name);
    this.setState(prevNames => {
      this.contacts = [...prevNames, name];
    })
  }
  
  render() {
    const {contacts, name} = this.state;

    return (
      <div className="App">
        <AddContact contacts={contacts} name={name}/>

        <Contacts contacts={contacts} name={name} onAddName={this.onAddName}/>
      </div>
    );
  }
}

export default App;
