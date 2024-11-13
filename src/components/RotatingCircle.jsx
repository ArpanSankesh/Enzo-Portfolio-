import { useGSAP } from "@gsap/react"
import gsap from "gsap";

const RotatingCircle = () => {
    useGSAP(function(){
        gsap.to('#banner img', {
          rotate:360, 
          duration:6,
          repeat:-1,
          ease:'linear'
        })
      })
  return (
    <div id="banner" className="fixed right-[5%] bottom-14 z-50">
        <img className="h-[5rem] cursor-pointer mb-8" src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
        <img className="h-[5rem] cursor-pointer" src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_114,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
      </div>
  )
}

export default RotatingCircle