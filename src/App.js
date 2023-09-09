import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Coins from './routes/Coins';
import SpecificCoin from './routes/SpecificCoin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Coins />} />
          <Route path="coin/:id" element={<SpecificCoin />} />
          {' '}

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
