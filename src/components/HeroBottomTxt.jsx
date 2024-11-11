import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const HeroBottomTxt = () => {
  useGSAP(function(){
    gsap.to('#banner img', {
      rotate:360, 
      duration:6,
      repeat:-1,
      ease:'linear'
    })
  })
  return (
    <div className="absolute w-full h-52 bottom-10 left-0  flex items-end justify-between px-20">
      <div>
        <h1 className="leading-tight text-lg font-[anzo1]">BRAND DESIGN | WEBSITE DESIGN</h1>
        <h1 className="leading-tight text-lg text-gray-400 font-[anzo2]">BESPOKE FREELANCE</h1>
      </div>
      <div id="banner" className="flex flex-col justify-around items-center h-full">
        <img className="h-16 cursor-pointer" src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
        <img className="h-16 cursor-pointer" src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
  )
}

export default HeroBottomTxt