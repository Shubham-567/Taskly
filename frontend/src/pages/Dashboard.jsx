import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useAuthStore from "../store/authStore";
import FilterBar from "../components/FilterBar";
import TaskCard from "../components/TaskCard";
import useTaskStore from "../store/taskStore";
import { Plus } from "lucide-react";
import TaskModal from "../components/TaskModal";

// todo: add a page loader until loading is true ........

const Dashboard = () => {
  const { fetchProfile } = useAuthStore();
  const { tasks, loadTasks, taskLoading } = useTaskStore();
  const [isModalOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    fetchProfile();
    loadTasks();
  }, []);

  return (
    <div>
      <Navbar />

      <div className='mt-15 px-6 sm:px-8 py-4 space-y-4'>
        {/* Filter bar */}
        <FilterBar />
        {taskLoading ? (
          <p>Loading...</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {tasks.length > 0 ? (
              tasks.map((task) => <TaskCard key={task._id} task={task} />)
            ) : (
              <p>No tasks found</p>
            )}
          </div>
        )}
        <button
          onClick={() => setIsMenuOpen(true)}
          className='fixed bottom-6 right-6 p-2 bg-primary-500 hover:opacity-90 rounded-full'>
          <Plus className='size-6 text-primary-foreground cursor-pointer' />
        </button>
      </div>

      {isModalOpen && <TaskModal onClose={() => setIsMenuOpen(false)} />}
    </div>
  );
};

export default Dashboard;
