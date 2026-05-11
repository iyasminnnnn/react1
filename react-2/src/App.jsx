import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './components/products';
import Details from './components/details';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;