import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateFilteredList } from '../redux/coins/coinsSlice';

function FilterForm() {
  const dispatch = useDispatch();

  const [filtering, setFiltering] = useState(false);

  useEffect(() => {
    dispatch(updateFilteredList(''));
  }, [dispatch]);

  const handleChange = (e) => {
    dispatch(updateFilteredList(e.target.value));
    if (e.target.value !== '') {
      setFiltering(true);
    } else {
      setFiltering(false);
    }
  };

  return (
    <>
      <form className="w-full flex items-center justify-center bg-blue-1 p-5">
        <label htmlFor="name" className="w-2/3">
          <input onChange={(e) => { handleChange(e); }} type="text" id="name" name="name" placeholder="Filter by crypto name..." className="w-full flex text-text-color justify-center border-2 outline-0 border-text-color rounded-lg px-4 py-2 bg-blue-1 placeholder:text-text-color" />
        </label>
      </form>
      <p className="bg-blue-5 px-6 py-1 text-text-color lato font-bold">{filtering ? 'Cryptocurrency found' : 'Cryptos'}</p>
    </>
  );
}

export default FilterForm;
