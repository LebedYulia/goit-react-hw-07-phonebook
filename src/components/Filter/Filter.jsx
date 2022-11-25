import { useDispatch } from 'react-redux';
import { changeFilter } from 'components/redux/filterSlice';
import { Label } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault(); 
    const filter = e.currentTarget.value;
    dispatch(changeFilter(filter))
  }
   
  return (
    <Label>
      Find contacts by name
      <input type="text" name="filter"  onChange={handleChange} />
    </Label>
  );
};


