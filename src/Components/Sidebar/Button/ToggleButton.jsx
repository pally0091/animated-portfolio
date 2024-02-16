import { FaArrowUp } from "react-icons/fa";

const ToggleButton = ({ open, setOpen }) => {
  console.log(open);
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <FaArrowUp
        className={`${
          open ? "rotate-180" : "rotate-90"
        } transition-all duration-500 ease-in-out`}
      />
    </button>
  );
};

export default ToggleButton;
