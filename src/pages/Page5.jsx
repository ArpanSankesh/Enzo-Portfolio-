/* eslint-disable react/no-unknown-property */
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Page5 = () => {
    gsap.registerPlugin(ScrollTrigger);
  useGSAP(function () {
    gsap.from("#rotateText2 h1", {
      transform: "rotateX(-90deg)",
      opacity: 0,
      duration: 1,
      stagger: 1,
      color:'white' ,
      scrollTrigger: {
        trigger: "#rotateText2 h1",
        
        start: "top 30%",
        end: "top -200%",
        scrub: 3,
      },
    });
  });

  return (
    <div id="rotateText2" className="w-full min-h-screen text-black">
      
      <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center mt-10 ">
        HELPING
      </h1>
      <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center text-gray-300">
        MY
      </h1>
      <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">
        CLIENTS
      </h1>
      <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">
        TO ACHIVE
      </h1>
      <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center text-gray-300">
        THEIR
      </h1>
      <h1 className="leading-[34vw] font-[anzo3]  text-[41vw] text-center ">
        DREAMS!
      </h1>

    </div>
  );
};

export default Page5;
