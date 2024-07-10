import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Checkout from './Components/Checkout';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path='/'element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />

          </Routes>

        </div>
    </div>
    </Router>
    
  );
}

export default App;
