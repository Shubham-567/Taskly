const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={
        "font-medium py-2 px-4 bg-primary-500 hover:bg-primary-500/80 text-primary-foreground rounded-lg cursor-pointer outline-none focus-within:ring-2 ring-primary-400 " +
        className
      }>
      {text}
    </button>
  );
};

export default Button;
