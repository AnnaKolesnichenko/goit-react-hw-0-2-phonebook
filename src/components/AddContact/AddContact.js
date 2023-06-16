import css from './addContact.module.css';

import { Component } from 'react';

class AddContact extends Component {

    state = {
        name: '',
    };

    handleFormChange = (e) => {
        // this.setState({name: e.currentTarget.value})
        const value = e.currentTarget.value;

        this.setState({
            name: value,
        });
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({name: ' '});
    };

    render() {  
        return (
            <div className={css.main}>
                <h1 className={css.main_title}>Name</h1>
                <form className={css.form} onSubmit={this.handleFormSubmit}>
                    <label htmlFor=''>
                        <input
                        className={css.name_input}
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleFormChange}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. 
                            For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            required
                        />
                    </label>
                        <button type='submit' className={css.add_btn}>Add contact</button>
                </form>
            </div>
        )
    }
}

export default AddContact;