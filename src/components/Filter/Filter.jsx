import { useSelector, useDispatch } from 'react-redux';
import { searchReducer } from 'redux/Feedback/usersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.users.filter);
  const handleChangeSearch = event => {
    dispatch(searchReducer(event.target.value));
  };
  return (
    <div>
      <form>
        <input value={filter} type="text" onChange={handleChangeSearch} />
      </form>
    </div>
  );
};
