

export const Input = ({ label, icon, type = "text", ...inputProps }) => {
  return (
    <div className='space-y-10'>
      {label ? (
        <label htmlFor={label + "-input"} className='text-sm text-txt-muted'>
          {label}
        </label>
      ) : null}
      <div className='bg-inputs-bg flex items-center gap-2 p-2 border border-border rounded-lg shadow focus-within:ring-2 ring-primary mt-0.5 w-full'>
        {icon ? <span>{icon}</span> : null}
        <input
          id={label + "-input"}
          type={type}
          className={"w-full outline-none border-none"}
          {...inputProps}
        />
      </div>
    </div>
  );
};
