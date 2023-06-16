import './contacts.css';

const Contacts = ({contacts, name, onAddName}) => {

    return (
        <div>
            <h1>Contacts</h1>
            <ul>
                <li>{contacts.map(contact => {
                        return contact;
                    })}
                </li>
            </ul>
        </div>
    )
}

export default Contacts;