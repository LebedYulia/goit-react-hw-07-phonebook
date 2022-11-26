import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { Contact, ContactInfo } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id))

  return (
    <Contact>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
