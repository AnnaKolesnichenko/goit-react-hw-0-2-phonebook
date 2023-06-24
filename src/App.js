import { Component } from 'react';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';

import './App.css';
import { nanoid } from 'nanoid';


class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  onContactCreate = (data) => {
    this.setState({name: data.name, number: data.number});
     const newContact = {
      ...data,
      id: nanoid(),
    };
    
    this.setState({
      contacts: [...this.state.contacts, newContact],
    })
    console.log(this.state.contacts);    
  }
   
  onFilterChange = (contacts, filter) => {
    const filtered = contacts.filter(contact => {
      return contact.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    })
    this.setState({
      contacts: filtered,
    })
        
  }

  render() {
    const {contacts, name, number, filter} = this.state;

    return (
      <div className="App">
        <AddContact contacts={contacts} name={name} number={number} onFormSubmit={this.onContactCreate}/>

        <Contacts contacts={contacts} filter={filter} onFilter={this.onFilterChange}/>
      </div>
    );
  }
}

export default App;
