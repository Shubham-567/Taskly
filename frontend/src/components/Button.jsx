const Button = ({ text, onClick, className, variant = "primary" }) => {
  const btnVariants = {
    primary: "bg-primary-500 hover:bg-primary-500/80 text-primary-foreground",
    secondary:
      "bg-surface-secondary hover:bg-surface-secondary/80 text-primary-500",
  };

  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary" ? btnVariants.primary : btnVariants.secondary
      } 
      font-medium py-2 px-4 rounded-lg cursor-pointer outline-none focus-within:ring-2 ring-primary-400
      ${className}`}>
      {text}
    </button>
  );
};

export default Button;
