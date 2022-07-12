const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      className={`${selected ? "bg-yellow-500 text-black font-bold":"border border-yellow-500"}  rounded-lg p-2.5 cursor-pointer hover:bg-yellow-500 hoer:text-black`}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default SelectButton;
