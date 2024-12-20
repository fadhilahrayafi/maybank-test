import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeFilteredData } from '../features/tableSlice';
import EditableCell from './editableCell';

const DataTable = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.table.filteredData);

  useEffect(() => {
    dispatch(initializeFilteredData());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {Object.entries(row).map(([column, value]) => (
              <td key={column}>
                <EditableCell value={value} rowIndex={rowIndex} column={column} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;