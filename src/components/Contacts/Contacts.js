
import css from './contacts.module.css';

const Contacts = ({contacts, onFilter}) => {

    return (
        <div className={css.main}>

            <ul className={css.list}>
                {contacts.map((contact) => {
                    return <li className={css.list_item} key={contact.id} >{contact.name}: {contact.number}</li>
                })}
                {/* <li className={css.list_item}>{name}
                </li> */}
            </ul>
        </div>
    )
}

export default Contacts;