const Button = ({ text, onClick, className, variant = "primary", ...rest }) => {
  const btnVariants = {
    primary: "bg-primary hover:bg-primary/80 text-primary-foreground",
    secondary: "bg-inputs-bg hover:bg-inputs-bg/80 text-primary",
  };

  return (
    <button
      onClick={onClick}
      className={`${
        variant === "primary" ? btnVariants.primary : btnVariants.secondary
      } 
      font-medium py-2 px-4 rounded-lg outline-none focus-within:ring-2 ring-primary
      ${className}`}
      {...rest}>
      {text}
    </button>
  );
};

export default Button;
