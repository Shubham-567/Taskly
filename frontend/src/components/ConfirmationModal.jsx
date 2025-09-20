import { AlertTriangle } from "lucide-react";

const ConfirmationModal = ({ onClose, onConfirm }) => {
  return (
    <div className='bg-bg/60 backdrop-blur-[1px] fixed top-0 left-0 w-full h-full flex justify-center items-center'>
      <div className='bg-card-bg rounded-lg shadow-lg p-6 flex flex-col items-center justify-center gap-2 w-full max-w-sm'>
        <AlertTriangle className='size-8 text-danger' />
        <h3 className='text-2xl font-semibold text-txt'>Confirm Deletion</h3>
        <p className='text-txt-muted text-center'>
          Are you sure you want to delete the task? This action cannot be
          undone.
        </p>

        <div className='flex justify-center gap-2 mt-2'>
          <button
            className='py-2 px-4 rounded-md border border-border bg-inputs-bg hover:opacity-80 cursor-pointer font-medium text-base'
            onClick={onClose}>
            Cancel
          </button>
          <button
            className='py-2 px-4 rounded-md border border-border bg-danger text-danger-foreground hover:opacity-80 cursor-pointer font-medium text-base'
            onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
