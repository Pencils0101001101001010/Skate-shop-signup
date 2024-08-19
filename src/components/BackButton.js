import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

// error button was underlined but functionality was still working
// eslint-disable-next-line react/prop-types
const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="justify-end rounded-lg p-2 shadow-xl bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-400 hover:text-yellow-800 hover:bg-transparent"
      >
        <BsArrowLeft />
      </Link>
    </div>
  );
};

export default BackButton;
