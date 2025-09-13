import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useAuthStore from "./store/authStore";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthStore();
  return token ? children : <Navigate to='/auth' />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />

        <Route
          path='/'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path='*' element={<p>Not Found 404</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
