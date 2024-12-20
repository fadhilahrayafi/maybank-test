import { Provider } from 'react-redux';
import './App.css';
import DataTable from './components/dataTable.js';
import FilterInput from './components/filterInput.js';
import SortingButton from './components/sortingButton.js';
import store from './store.js';


function App() {
  return (
  <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <FilterInput />
        <SortingButton />
        <DataTable />
      </header>
    </div>
  </Provider>
  );
}

export default App;
