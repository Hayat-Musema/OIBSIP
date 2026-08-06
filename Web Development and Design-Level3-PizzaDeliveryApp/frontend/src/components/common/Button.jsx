const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}) => {
  const styles = {
    primary:
      "bg-[#e2361d] text-white shadow-[0_16px_34px_rgba(226,54,29,0.28)] hover:-translate-y-0.5 hover:bg-[#c92e18]",

    secondary:
      "border border-[#eadfd4] bg-white text-[#201510] hover:-translate-y-0.5 hover:border-[#e2361d] hover:text-[#e2361d]",

    outline:
      "border border-[#e2361d] text-[#e2361d] hover:-translate-y-0.5 hover:bg-[#e2361d] hover:text-white",
  };

  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition duration-300 focus:outline-none focus:ring-4 focus:ring-[#e2361d]/20 ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
