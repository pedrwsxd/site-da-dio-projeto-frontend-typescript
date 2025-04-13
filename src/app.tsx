import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Feed from './pages/feed';
import { AuthContextProvider } from './context/auth';

function App() {
  return (
    
      <BrowserRouter>
        <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </AuthContextProvider>
      </BrowserRouter>
    
  );
}
export default App;