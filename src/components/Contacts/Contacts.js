import css from './contacts.module.css';

const Contacts = ({name}) => {

    return (
        <div className={css.main}>
            <h1 className={css.title}>Contacts</h1>
            <ul className={css.list}>
                <li className={css.list_item}>{name}
                </li>
            </ul>
        </div>
    )
}

export default Contacts;