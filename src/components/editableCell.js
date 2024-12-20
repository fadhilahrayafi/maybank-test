import React from 'react';
import { useDispatch } from 'react-redux';
import { editCell } from '../features/tableSlice';

const EditableCell = ({ value, rowIndex, column }) => {
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    dispatch(editCell({ rowIndex, column, value: e.target.value }));
  };

  return <input type="text" value={value} onChange={handleEdit} />;
};

export default EditableCell;