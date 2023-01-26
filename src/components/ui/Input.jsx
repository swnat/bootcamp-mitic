const inputClasses = [
  "bg-gray-50",
  "border",
  "border-gray-300",
  "text-sm",
  "rounded-lg",
  "focus:ring-blue-500",
  "focus:border-blue-500",
  "text-black",
  "block",
  "w-full",
  "p-2.5",
  "dark:text-white",
  "dark:bg-gray-700",
  "dark:border-gray-600",
  "dark:placeholder-gray-400",
  "dark:focus:ring-blue-500",
  "dark:focus:border-blue-500",
].join(" ")

const Input = ({ label, id, className }) => {
  return (
    <>
      <label
        for={id}
        class="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input type="text" id={id} className={`${inputClasses} ${className}`}>
      </input>
    </>
  )
}

export default Input
