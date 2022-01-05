import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/About';
import Homepage from './pages/Home';
import StorePage from './pages/Store';

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/store"} element={<StorePage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
  );
}

export default App;
