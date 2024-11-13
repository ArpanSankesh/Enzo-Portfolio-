
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className=" z-50 fixed text-white flex items-center justify-end w-fit top-14 right-6">
        <div className="bg-black px-10 py-2 rounded-full border-4 hover:bg-zinc-400 hover:scale-110 ease-in-out duration-200 border-white cursor-pointer shadow-sm shadow-gray-700 ">Hire me</div>
        <i className="ri-more-2-line text-3xl ml-2 cursor-pointer text-gray-500"></i>
    </div>
  )
}

export default Header