import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import AddBoxesPage from './pages/AddBoxesPage';
import ListBoxesPage from './pages/ListBoxesPage';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate replace to='/addboxes' />}/>
            <Route path='/addboxes' element={<AddBoxesPage />} />
            <Route path='/listboxes' element={<ListBoxesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;