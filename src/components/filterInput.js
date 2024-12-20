import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from 'lodash';
import { setFilter } from '../features/tableSlice';

const FilterInput = () => {
  const dispatch = useDispatch();

  const debouncedFilter = useCallback(
    debounce((value) => {
      dispatch(setFilter(value));
    }, 300),
    [dispatch]
  );

  const handleChange = (e) => {
    debouncedFilter(e.target.value);
  };

  return <input type="text" placeholder="Filter rows" onChange={handleChange} />;
};

export default FilterInput;