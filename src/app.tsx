import { useMemo } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResumePage from './Resume/page';
import ErrorPage from './404';

function App() {
  const basename = useMemo(() => {
    const isProduction = (env: string) => env === 'production';
    return isProduction(import.meta.env.MODE) ? '/rebuild/' : '/';
  }, []);

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<ResumePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
