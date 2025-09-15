const FilterBar = () => {
  return (
    <div className='flex max-sm:flex-col sm:items-center justify-between gap-4'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-nowrap'>
        My Tasks
      </h2>

      <div className='flex items-center gap-2 sm:gap-4'>
        <button className='py-1 px-4 rounded-md border border-border bg-primary-500 text-primary-foreground hover:opacity-80 cursor-pointer font-medium text-base'>
          All
        </button>
        <button className='py-1 px-4 rounded-md border border-border bg-surface hover:opacity-80 cursor-pointer  font-medium text-base'>
          Pending
        </button>
        <button className='py-1 px-4 rounded-md border border-border bg-surface hover:opacity-80 cursor-pointer  font-medium text-base'>
          Complete
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
