import { Pen, Trash2 } from "lucide-react";

const TaskCard = ({ task }) => {
  return (
    <div className='bg-surface border border-border rounded-md flex flex-col justify-between gap-2 p-4'>
      <div className=''>
        <label
          htmlFor={task._id + "-status"}
          className='flex items-start justify-between gap-2'>
          <h3 className='text-lg font-medium text-txt-primary cursor-pointer '>
            {task.title}
          </h3>

          <input type='checkbox' id={task._id + "-status"} className='mt-2' />
        </label>

        <p className='text-base text-txt-secondary mt-1 min-h-[7rem]'>
          {task.description}
        </p>
      </div>

      <div className='border-t border-border p-4 pb-0 flex items-center justify-end gap-4'>
        <Pen className='size-4 text-txt-secondary hover:text-primary-500 cursor-pointer' />
        <Trash2 className='size-4 text-txt-secondary hover:text-primary-500 cursor-pointer' />
      </div>
    </div>
  );
};

export default TaskCard;
