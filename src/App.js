import { Component } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';

import './App.css';
import { nanoid } from 'nanoid';


class App extends Component {
  state = {
    contacts: [],
    name: '',
  }

  onContactCreate = (data) => {
    console.log(data.name);

    this.setState({name: data.name});

     const newContact = {
      ...data,
      id: nanoid(),
    };
    console.log(newContact); 
  }


  onAddContacts = (data) => {

    this.setState(prevNames => ({
      contacts: [...prevNames.contacts, data.name],
    }))
    
  }


  
  render() {
    const {contacts, name} = this.state;

    return (
      <div className="App">
        <AddContact contacts={contacts} name={name} onFormSubmit={this.onContactCreate}/>

        <Contacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
