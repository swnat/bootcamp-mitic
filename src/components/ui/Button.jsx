const buttonClasses = [
  "bg-orange-500",
  "hover:bg-orange-700",
  "text-white",
  "font-bold",
  "py-2",
  "px-4",
  "rounded-lg",
].join(" ")

const Button = ({ children, className }) => {
  return <button className={`${buttonClasses} ${className}`}>{children}</button>
}

export default Button
