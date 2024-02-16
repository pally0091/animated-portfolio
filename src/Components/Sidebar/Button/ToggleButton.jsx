import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const ToggleButton = ({ open, setOpen }) => {
  console.log(open);
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      {open ? <RxCross2 /> : <IoMdMenu />}
    </button>
  );
};

export default ToggleButton;
