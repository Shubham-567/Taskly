import { useState } from "react";

const FilterBar = ({ selectedFilter, onFilterChange }) => {
  const handleFilterChange = (filter) => {
    onFilterChange(filter);
  };

  return (
    <div className='flex max-sm:flex-col sm:items-center justify-between gap-4'>
      <h2 className='text-2xl sm:text-3xl font-semibold text-nowrap'>
        My Tasks
      </h2>

      <div className='flex items-center gap-2 sm:gap-4'>
        <button
          className={`py-1 px-4 rounded-md border border-border ${
            selectedFilter === "all"
              ? "bg-primary-500 text-primary-foreground"
              : "bg-surface hover:bg-surface/80 text-txt-primary"
          } cursor-pointer font-medium text-base`}
          onClick={() => handleFilterChange("all")}>
          All
        </button>
        <button
          className={`py-1 px-4 rounded-md border border-border ${
            selectedFilter === "pending"
              ? "bg-primary-500 text-primary-foreground"
              : "bg-surface hover:bg-surface/80 text-txt-primary"
          } cursor-pointer font-medium text-base`}
          onClick={() => handleFilterChange("pending")}>
          Pending
        </button>
        <button
          className={`py-1 px-4 rounded-md border border-border ${
            selectedFilter === "completed"
              ? "bg-primary-500 text-primary-foreground"
              : "bg-surface hover:bg-surface/80 text-txt-primary"
          } cursor-pointer font-medium text-base`}
          onClick={() => handleFilterChange("completed")}>
          Completed
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
