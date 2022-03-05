import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/Store';
import Shipments from './views/Shipments';
import Dispatches from './views/Dispatches';
import Landing from './views/Landing';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/shipments' element={<Shipments />} />
            <Route path='/dispatches' element={<Dispatches />} />
            <Route path='/' element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

/*<Route
              path='/admin/dashboard'
              element={
                <PrivateRoute
                  component={AdminPage}
                  role='admin'
                />
              }
            />*/