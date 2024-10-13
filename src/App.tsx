
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Landing from './pages/Landing';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
