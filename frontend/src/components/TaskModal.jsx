import { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";
import useTaskStore from "../store/taskStore";

const TaskModal = ({ onClose, mode = "add", task }) => {
  const { addTask, editTask } = useTaskStore();

  const [form, setForm] = useState({
    title: task.title || "",
    description: task.description || "",
    status: task.status || "pending",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title && !form.description) {
      alert("Task title and description are required");
    }

    if (mode.toLowerCase() === "add") {
      await addTask(form);
      console.log("Task added: ", form);
    } else if (mode.toLowerCase() === "edit") {
      await editTask(task._id, form);
      console.log("Task edited: ", form);
    } else {
      console.log("invalid mode");
    }

    onClose();
  };

  return (
    <div className='bg-bg/60 backdrop-blur-[1px] fixed top-0 left-0 w-full h-full flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-card-bg rounded-lg shadow-lg p-6 space-y-4 w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-txt'>
          {mode.toLowerCase() === "add" ? "Add" : "Edit"} Task
        </h2>

        <Input
          label='Title'
          placeholder='e.g. Finish project report'
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <div className='space-y-10'>
          <label htmlFor={"Description"} className='text-sm text-txt-muted'>
            Description
          </label>

          <div className='bg-inputs-bg flex items-center gap-2 p-2 border border-border rounded-lg shadow   focus-within:ring-2 ring-primary mt-0.5 w-full'>
            <textarea
              className='w-full outline-none border-none min-h-[8.5rem]'
              placeholder='Add more details... (optional)'
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
            />
          </div>
        </div>

        {mode.toLowerCase() === "edit" && (
          <div className='flex items-center justify-between gap-4 p-4 bg-inputs-bg/50 rounded-lg'>
            <span className='font-medium text-txt'>Status</span>

            <label className='inline-flex items-center cursor-pointer'>
              <input
                type='checkbox'
                value=''
                className='sr-only peer'
                checked={form.status === "completed"}
                onChange={(e) =>
                  setForm({
                    ...form,
                    status: e.target.checked ? "completed" : "pending",
                  })
                }
              />

              <span className='me-3 text-sm font-medium text-primary peer-checked:text-txt'>
                Pending
              </span>

              <div
                className="relative w-11 h-6 bg-inputs-bg rounded-full 
                peer peer-checked:after:translate-x-full peer-checked:bg-primary 
                after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                after:bg-primary-foreground after:rounded-full after:size-5 after:transition-all
                peer-focus:outline-none ring-2 ring-border/80 peer-focus:ring-primary"></div>

              <span className='ms-3 text-sm font-medium text-txt peer-checked:text-primary'>
                Completed
              </span>
            </label>
          </div>
        )}

        <div className='flex items-center justify-end gap-4'>
          <Button text='Cancel' variant='secondary' onClick={onClose} />

          <Button
            text={mode.toLowerCase() === "add" ? "Add Task" : "Save Changes"}
            type='submit'
          />
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
