import { useState } from "react";
import Button from "./Button";
import { Input } from "./Input";
import useTaskStore from "../store/taskStore";

const TaskModal = ({ onClose }) => {
  const { addTask } = useTaskStore();

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title && !form.description) {
      alert("Task title and description are required");
    }

    await addTask(form);

    console.log("Task added: ", form);

    onClose();
  };

  return (
    <div className='bg-bg/60 backdrop-blur-[1px] fixed top-0 left-0 w-full h-full flex justify-center items-center'>
      <form
        onSubmit={handleSubmit}
        className='bg-surface rounded-lg shadow-lg p-6 space-y-4 w-full max-w-md'>
        <h2 className='text-2xl font-semibold text-txt-primary'>Add Task</h2>

        <Input
          label='Title'
          placeholder='e.g. Finish project report'
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <div className='space-y-10'>
          <label htmlFor={"Description"} className='text-sm text-txt-secondary'>
            Description
          </label>

          <div className='bg-surface-secondary flex items-center gap-2 p-2 border border-border rounded-lg shadow   focus-within:ring-2 ring-primary-500 mt-0.5 w-full'>
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

        <div className='flex items-center justify-end gap-4'>
          <Button text='Cancel' variant='secondary' onClick={onClose} />

          <Button text='Save' type='submit' />
        </div>
      </form>
    </div>
  );
};

export default TaskModal;
