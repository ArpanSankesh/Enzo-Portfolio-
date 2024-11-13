import BottomText2 from "../components/BottomText2"

const Page4 = () => {
  return (
    <div className="h-screen p-4 text-white">
      <div id="page-in" className="z-10 w-full h-full bg-[url(https://static.wixstatic.com/media/f1c650_1baf8f9dcad444669565ec73ee697a92~mv2.jpg/v1/fill/w_1724,h_1203,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Background%20Anzo_Studio.jpg)] bg-cover rounded-[2rem] shadow-lg shadow-grey-700 px-14 py-12">
      <h1 className="absolute top-[1%] left-16 font-[anzo3] tracking-wide text-gray-400 text-[20vw] z-20">WHAT</h1>
      <h1 className="absolute top-[30%] left-16 font-[anzo3] tracking-wide text-white text-[20vw] z-20">I DO</h1>
      <BottomText2 />
      </div>
      
    </div>
  )
}

export default Page4