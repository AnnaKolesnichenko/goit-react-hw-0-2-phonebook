
import css from './contacts.module.css';

const Contacts = ({contacts}) => {

    return (
        <div className={css.main}>
            <h1 className={css.title}>Contacts</h1>
            <h2 className={css.find_title}>Find contacts by name</h2>
            <input type='text' className={css.find_input}></input>
            <ul className={css.list}>
                {contacts.map((contact) => {
                    return <li className={css.list_item} key={contact.id}>{contact.name}: {contact.number}</li>
                })}
                {/* <li className={css.list_item}>{name}
                </li> */}
            </ul>
        </div>
    )
}

export default Contacts;