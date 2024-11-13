import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

const Page3 = () => {
  
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(function(){
    gsap.from('.line',{
      opacity:0,
      width:0,
      duration:2,
      scrollTrigger:{
        trigger: '.line',
        markers: true,
        scrub:true,
        start:'top 100%',
        end:'top 50%'
      }
    })
  })
  return (
    <div className="w-full h-screen flex items-center justify-center relative z-20">
        <img className="absolute z-20 h-[38vw]" src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_849,h_488,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" />
        <video autoPlay loop muted playsInline  className=" h-[35vw] w-[49.5vw] object-cover z-10" src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
        <div className="line h-0.5 w-2/3 top-[40%] bg-gray-400 absolute"></div>
        <div className="line h-0.5 w-5/6 top-[55%] bg-gray-400 absolute"></div>
        <div className="line h-0.5 w-full top-[71%] bg-gray-400 absolute"></div>

    </div>
  )
}

export default Page3