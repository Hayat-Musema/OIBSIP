const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const styles = {
    primary:
      "bg-red-700 text-white hover:bg-red-800",

    secondary:
      "border border-gray-300 bg-white text-gray-900 hover:bg-gray-100",

    outline:
      "border border-red-700 text-red-700 hover:bg-red-700 hover:text-white",
  };

  return (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition duration-300 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;