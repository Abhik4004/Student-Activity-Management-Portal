import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MyProvider } from './Hooks/MyContext';
import StudentDashboard from './pages/Student';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/SignUp';
import Teacher from './pages/Teacher';

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign" element={<Signup />} />
          <Route path="/studentdashboard" element={<StudentDashboard />} />
          <Route path="/teacherdashboard" element={<Teacher />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
