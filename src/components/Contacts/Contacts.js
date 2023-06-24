
import css from './contacts.module.css';

const Contacts = ({contacts}) => {

    return (
        <div className={css.main}>
            <h1 className={css.title}>Contacts</h1>
            <ul className={css.list}>
                {contacts.map((contact) => {
                    return <li className={css.list_item}>{contact.name}</li>
                })}
                {/* <li className={css.list_item}>{name}
                </li> */}
            </ul>
        </div>
    )
}

export default Contacts;