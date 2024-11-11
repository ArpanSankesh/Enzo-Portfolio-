import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"


const Page2 = () => {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function() {
        gsap.from('#rotateText h1', {
            transform: 'rotateX(-90deg)',
            opacity:0,
            duration:1,
            stagger:1, 
            scrollTrigger:{
                trigger:'#rotateText h1',
                start: "top 100%",
                end:'top -200%',
                scrub:1
            }
        })
    })
  return (
    <div id="rotateText" className='w-full h-screen text-black'>
        <h3 className="text-center m-5 text-lg text-gray-600 font-[anzo2]">©  anzo.studio 2024 | designed and developed</h3>
            <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">IMPACTFUL</h1>
            <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">DESIGN</h1>
            <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">IS THE</h1>
            <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">DESIGN</h1>
            <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">THAT</h1>
            <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">WORKS!</h1>
        
    </div>
  )
}

export default Page2