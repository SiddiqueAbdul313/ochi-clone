// Routes.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutPage from './components/About';
import FeaturedPage from './components/Featured';
import CardsPage from './components/Cards';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/featured" element={<FeaturedPage />} />
        <Route path="/cards" element={<CardsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
