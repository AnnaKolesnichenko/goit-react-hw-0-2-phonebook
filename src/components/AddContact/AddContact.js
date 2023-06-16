import './addContact.css';

const AddContact = ({contacts, name}) => {
    return (
        <div>
            <h1>{name}</h1>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <button type='submit'>Add contact</button>
        </div>
    )
}

export default AddContact;