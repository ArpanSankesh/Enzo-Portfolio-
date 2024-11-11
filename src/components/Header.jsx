
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
    <div className=" z-10 fixed text-white flex items-center justify-end w-fit top-14 right-6">
        <div className="bg-black px-10 py-2 rounded-full border-4 hover:bg-zinc-400 border-white cursor-pointer ">Hire me</div>
        <i className="ri-more-2-line text-3xl ml-2 cursor-pointer"></i>
    </div>
  )
}

export default Header