export default function Navbar() {
  return (
    <div className="flex justify-between items-center py-3 px-8 bg-white text-black h-[72px]">
      <div className="md:w-[220px]">
        <h1 className="font-playball text-3xl text-shadow-md text-shadow-amber-50">
          Fruits
        </h1>
      </div>
      <div className="flex bg-gray-100 flex-1 mx-3 border-1 border-amber-100 rounded-[10px]">
        <input
          className="text-gray-600 border-0 outline-0 py-2 px-2.5 md:w-full"
          type="text"
          placeholder="search..."
        />
      </div>

      <div className="md:w-[200px]">
        <button className="py-2 px-3 bg-blue-600 text-white rounded-[10px]">
          sing in
        </button>
      </div>
    </div>
  );
}
