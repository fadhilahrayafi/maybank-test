import { createSlice } from '@reduxjs/toolkit';

const tableSlice = createSlice({
  name: 'table',
  initialState: {
    data: [
      { name: 'Alice', age: 25, email: 'alice@example.com' },
      { name: 'Bob', age: 30, email: 'bob@example.com' },
      { name: 'Charlie', age: 35, email: 'charlie@example.com' },
    ],
    filteredData: [],
    sortBy: null,
    filter: '', 
  },
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      const [key, order] = action.payload.split(':');
      state.filteredData.sort((a, b) => {
        const first = typeof a[key] === 'number' ? a[key] : a[key].toLowerCase();
        const second = typeof b[key] === 'number' ? b[key] : b[key].toLowerCase();
        if (first < second) return order === 'asc' ? -1 : 1;
        if (first > second) return order === 'asc' ? 1 : -1;
        return 0;
      });
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.filteredData = state.data.filter((row) =>
        Object.values(row).some((value) =>
          String(value).toLowerCase().includes(action.payload.toLowerCase())
        )
      );
    },
    editCell: (state, action) => {
      const { rowIndex, column, value } = action.payload;
      state.data[rowIndex][column] = value;
      state.filteredData = [...state.data];
    },
    initializeFilteredData: (state) => {
      state.filteredData = [...state.data];
    },
  },
});

export const { setSortBy, setFilter, editCell, initializeFilteredData } = tableSlice.actions;
export default tableSlice.reducer;