import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectContacts } from 'components/redux/selectors';
import { addContact } from 'components/redux/operations';
import { Form, Label, Button } from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);

  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const containName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (containName) {
      form.reset();
      return alert(`${name} is alredy in contacts`);      
    }

    dispatch(addContact({name, number}));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="tel">
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};
