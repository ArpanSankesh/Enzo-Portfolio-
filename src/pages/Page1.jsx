import HeroBottomTxt from "../components/HeroBottomTxt"
import TiltText from "../components/TiltText"

const Page1 = () => {
  return (
    <div className='h-screen p-4 text-white'>
        <div className='w-full h-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2093,h_1196,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-cover rounded-[2rem] shadow-lg shadow-grey-700 px-10 py-12'>
        <img src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_111,h_111,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" className="w-16 z-12 ml-10" alt="" />
        <TiltText />
        <HeroBottomTxt />
        </div>
    </div>
  )
}

export default Page1