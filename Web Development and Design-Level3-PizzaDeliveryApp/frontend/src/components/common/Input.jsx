const Input = ({
  label,
  id,
  error,
  icon: Icon,
  className = "",
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-black text-[#201510]"
        >
          {label}
        </label>
      )}

      <div className="relative">
        {Icon && (
          <Icon
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#9b8a7f]"
            size={19}
          />
        )}
        <input
          id={id}
          className={`h-14 w-full rounded-full border bg-[#fffaf6] px-5 text-sm font-semibold text-[#201510] outline-none transition placeholder:text-[#a69388] focus:ring-4 ${
            Icon ? "pl-12" : ""
          } ${
            error
              ? "border-[#e2361d] focus:ring-[#e2361d]/10"
              : "border-[#eadfd4] focus:border-[#e2361d] focus:ring-[#e2361d]/10"
          }`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby={error ? `${id}-error` : undefined}
          {...props}
        />
      </div>

      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm font-semibold text-[#e2361d]">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
