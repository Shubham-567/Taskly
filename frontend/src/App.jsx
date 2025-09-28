import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import useAuthStore from "./store/authStore";
import Dashboard from "./pages/Dashboard";
import AuthPage from "./pages/AuthPage";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProtectedRoute = ({ children }) => {
  const { token } = useAuthStore();
  return token ? children : <Navigate to='/auth' />;
};

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme='dark'
        transition={Bounce}
      />

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

        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
