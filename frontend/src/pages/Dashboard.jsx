import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import useAuthStore from "../store/authStore";
import FilterBar from "../components/FilterBar";
import TaskCard from "../components/TaskCard";
import useTaskStore from "../store/taskStore";
import { LoaderPinwheel, Plus, TriangleAlert } from "lucide-react";
import TaskModal from "../components/TaskModal";

const Dashboard = () => {
  const { fetchProfile } = useAuthStore();
  const { tasks, loadTasks, taskLoading } = useTaskStore();
  const [isModalOpen, setIsMenuOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [taskModalData, setTaskModalData] = useState({});
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredTasks =
    selectedFilter === "all"
      ? tasks
      : tasks.filter((task) => task.status === selectedFilter);

  useEffect(() => {
    fetchProfile();
    loadTasks();
  }, []);

  return (
    <div>
      <Navbar />

      <div className='mt-15 px-6 sm:px-8 py-4 space-y-4 min-h-[90vh]'>
        {/* Filter bar */}
        <FilterBar
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
        {taskLoading ? (
          <div className='flex flex-col items-center justify-center gap-2 min-h-[70vh]'>
            <LoaderPinwheel className='size-12 animate-spin text-primary' />
            <h3 className='text-2xl font-semibold text-txt mt-2'>
              Loading Tasks
            </h3>
            <p className='text-txt-muted text-center'>
              Please wait a moment...
            </p>
          </div>
        ) : filteredTasks.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {filteredTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                openModal={() => {
                  setIsMenuOpen(true);
                  setIsEditMode(true);
                  setTaskModalData(task);
                }}
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center gap-2 min-h-[70vh]'>
            <TriangleAlert className='size-12 text-primary' />
            <h3 className='text-2xl font-semibold text-txt mt-2'>
              No tasks found
            </h3>
            <p className='text-txt-muted text-center'>
              {selectedFilter === "all"
                ? "No tasks found. Add a task to get started."
                : selectedFilter === "completed"
                ? "No completed tasks found."
                : "No pending tasks found."}
            </p>
          </div>
        )}

        <div className='fixed bottom-6 right-8'>
          <div className='relative group'>
            <button
              onClick={() => {
                setIsEditMode(false);
                setIsMenuOpen(true);
                setTaskModalData({});
              }}
              className='p-2 bg-primary hover:opacity-90 rounded-full'>
              <Plus className='size-6 text-primary-foreground cursor-pointer' />
            </button>

            {/* tooltip */}
            <div
              className='absolute -top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-card-bg text-txt text-nowrap px-2 py-1 text-sm font-bold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
              role='tooltip'>
              Add Task
              {/* down arrow  */}
              <div className='absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 rotate-45 bg-card-bg'></div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <TaskModal
          mode={isEditMode ? "edit" : "add"}
          task={taskModalData}
          onClose={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
