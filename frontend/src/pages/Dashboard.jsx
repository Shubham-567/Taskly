import { useEffect } from "react";
import Navbar from "../components/Navbar";
import useAuthStore from "../store/authStore";

// todo: add a page loader until loading is true ........

const Dashboard = () => {
  const { fetchProfile } = useAuthStore();

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div>
      <Navbar />

      <h1 className='flex items-center justify-center h-screen text-6xl text-primary-500 font-semibold'>
        Dashboard
      </h1>
    </div>
  );
};

export default Dashboard;
