import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/filterSlice';
import { getFilteredContacts } from '../../redux/selectors';

export const Filter = () => {
  const { filter } = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const onFilterChange = e => dispatch(filterContacts(e.currentTarget.value));

  return (
    <>
      <p>Find contacts by name</p>
      <input
        onChange={onFilterChange}
        value={filter}
        name="filter"
        type="search"
      />
    </>
  );
};
