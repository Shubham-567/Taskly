import { Pen, Trash2 } from "lucide-react";

const TaskCard = ({ task }) => {
  return (
    <div className='bg-surface border border-border rounded-md space-y-2 p-4'>
      <label
        htmlFor={task._id + "-status"}
        className='flex items-center justify-between gap-2'>
        <h3 className='text-lg font-medium text-txt-primary'>{task.title}</h3>

        <input type='checkbox' id={task._id + "-status"} />
      </label>

      <p className='text-base text-txt-secondary min-h-[4.5rem]'>
        {task.description} What if the description is really long? I don't know
        how to handle this yet but I'm working on it :).
      </p>

      <div className='border-t border-border p-4 flex items-center justify-end gap-4'>
        <Pen className='size-4 text-txt-secondary hover:text-primary-500 cursor-pointer' />
        <Trash2 className='size-4 text-txt-secondary hover:text-primary-500 cursor-pointer' />
      </div>
    </div>
  );
};

export default TaskCard;
