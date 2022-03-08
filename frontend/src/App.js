import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import Shipments from './views/Shipments';
import Dispatches from './views/Dispatches';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Navigate replace to='/addboxes' />}/>
            <Route path='/addboxes' element={<Shipments />} />
            <Route path='/listboxes' element={<Dispatches />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;