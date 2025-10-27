import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faHome,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  return (
    <div className="resize-x overflow-auto min-w-full h-[60px]  md:min-w-[250px] md:h-[calc(100vh-73px)] bg-white text-black">
      <div className="hidden md:flex flex-col p-3 bg-gray-100 mx-2 rounded-2xl mt-7 shadow-xl">
        <div className="flex flex-row gap-2">
          <img
            className="w-[60px] h-[60px] rounded-full"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold text-[14px]">david goggins </h3>
            <p className="text-[10px]">Remarkable person</p>
          </div>
        </div>

        <div className="mt-0 md:mt-2 grid grid-cols-3">
          <div className="flex flex-col">
            <h4 className="text-[14px] text-gray-400">Followers</h4>
            <h2 className="text-[14px] font-bold ">2.1m</h2>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[14px] text-gray-400">Following</h4>
            <h2 className="text-[14px] font-bold ">2.1m</h2>
          </div>

          <div className="flex flex-col">
            <h4 className="text-[14px] text-gray-400">Products</h4>
            <h2 className="text-[14px] font-bold ">2.1m</h2>
          </div>
        </div>

        <button className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white font-bold py-2 px-3 rounded-2xl mt-3 cursor-pointer">
          See your profile
        </button>
      </div>
      {/* menu list */}
      <ul className="flex flex-row  md:flex-col mx-2 mt-3">
        <li className="text-[15px] text-gray-500 cursor-pointer md:text-xl w-full  md:border-r-4 border-yellow-500 mx-1 md:mt-2">
          <FontAwesomeIcon className="text-yellow-500 mr-1" icon={faHome} />{" "}
          Home
        </li>
        <li className="text-[15px] text-gray-500 cursor-pointer md:text-xl w-full md:border-r-4 border-yellow-500 mx-1 md:mt-2">
          <FontAwesomeIcon className="text-yellow-500 mr-1" icon={faGear} />{" "}
          Setting
        </li>
        <li className="text-[15px] text-gray-500 cursor-pointer md:text-xl w-full md:border-r-4 border-yellow-500 mx-1 md:mt-2">
          <FontAwesomeIcon
            className="text-yellow-500 mr-1"
            icon={faShoppingCart}
          />{" "}
          Matketplace
        </li>
      </ul>
    </div>
  );
}
