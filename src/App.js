import { Route, Routes } from 'react-router-dom';

import AboutPage from './pages/About';
import Homepage from './pages/Home';
import StorePage from './pages/Store';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/store"} element={<StorePage />} />
        <Route path={"/about"} element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
