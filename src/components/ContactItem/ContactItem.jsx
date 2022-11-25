import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { Contact, ContactInfo } from './ContactItem.styled';
import { Button } from 'components/ContactForm/ContactForm.styled';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Contact>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
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
