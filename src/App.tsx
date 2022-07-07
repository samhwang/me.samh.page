import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResumePage from './Resume/page';
import ErrorPage from './404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ResumePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
