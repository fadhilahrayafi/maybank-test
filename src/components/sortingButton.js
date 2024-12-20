import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from 'lodash';
import { setSortBy } from '../features/tableSlice';

const SortingButton = () => {
  const dispatch = useDispatch();
  const sortBy = useSelector((state) => state.table.sortBy);

  const debouncedSort = useCallback(
    debounce((column, order) => {
      dispatch(setSortBy(`${column}:${order}`));
    }, 500),
    [dispatch]
  );

  const handleSort = (column) => {
    const newOrder = sortBy?.startsWith(column) && sortBy.endsWith('asc') ? 'desc' : 'asc';
    debouncedSort(column, newOrder);
  };

  return (
    <div>
      <button onClick={() => handleSort('name')}>Sort by Name</button>
      <button onClick={() => handleSort('age')}>Sort by Age</button>
    </div>
  );
};

export default SortingButton;