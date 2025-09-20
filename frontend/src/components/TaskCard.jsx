import { Pen, Trash2 } from "lucide-react";
import useTaskStore from "../store/taskStore";
import ConfirmationModal from "./ConfirmationModal";
import { useState } from "react";

const TaskCard = ({ task, openModal }) => {
  const { removeTask, toggleTaskStatus } = useTaskStore();
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);

  if (!task) return null;

  return (
    <>
      <div className='bg-card-bg border border-border rounded-md flex flex-col justify-between gap-2 p-4'>
        <div className=''>
          <label
            htmlFor={task._id + "-status"}
            className='flex items-start justify-between gap-2'>
            <h3
              className={`text-lg font-semibold text-txt cursor-pointer ${
                task.status === "completed"
                  ? " line-through text-txt-muted/70"
                  : ""
              }`}>
              {task.title}
            </h3>

            <input
              type='checkbox'
              id={task._id + "-status"}
              checked={task.status === "completed"}
              onChange={() => toggleTaskStatus(task._id)}
              className='mt-2 accent-primary '
            />
          </label>

          <p
            className={`text-base text-txt-muted mt-1 min-h-[6rem] ${
              task.status === "completed"
                ? " line-through text-txt-muted/90"
                : ""
            }`}>
            {task.description}
          </p>
        </div>

        <div className='border-t border-border p-4 pb-0 flex items-center justify-end gap-4'>
          <button onClick={openModal}>
            <Pen className='size-4 text-txt-muted hover:text-primary cursor-pointer' />
          </button>
          <button onClick={() => setShowConfirmationModal(true)}>
            <Trash2 className='size-4 text-txt-muted hover:text-primary cursor-pointer' />
          </button>
        </div>
      </div>

      {showConfirmationModal ? (
        <ConfirmationModal
          onClose={() => setShowConfirmationModal(false)}
          onConfirm={() => removeTask(task._id)}
        />
      ) : null}
    </>
  );
};

export default TaskCard;
