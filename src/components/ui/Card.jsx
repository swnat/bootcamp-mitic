const cardClasses = [
  "bg-slate-700",
  "text-white",
  "py-2",
  "px-4",
  "rounded-lg",
].join(" ")

const Card = ({ children, className }) => {
  return <div className={`${cardClasses} ${className}`}>{children}</div>
}

export default Card
