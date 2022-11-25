import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "components/redux/operations";
import { selectError, selectIsLoading } from "components/redux/selectors";
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';



export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
 
    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm  />
        </Section>
  
        <Section title={'Contacts'}>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          <ContactList />
        </Section>
      </div>
    );
  };
