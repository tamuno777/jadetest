// import { useRef } from "react";
// import {
//   motion,
//   useScroll,
//   useSpring,
//   useTransform,
//   useMotionValue,
//   useVelocity,
//   useAnimationFrame,
//   wrap
// } from "framer-motion";
// // import { wrap } from "@motionone/utils";


// function ParallaxText({ children, }) {
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 300
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false
//   });

 
//   const x = useTransform(baseX, (v) => `${wrap(-0, -25, v)}%`);

//   const directionFactor = useRef<Number>(1);
//   useAnimationFrame((t, delta) => {
//     let moveBy = directionFactor.current * -5 * (delta / 1000);

    
//     if (velocityFactor.get() < 0) {
//       directionFactor.current = -1;
//     } else if (velocityFactor.get() > 0) {
//       directionFactor.current = 1;
//     }
//     if (velocityFactor.get() !== 0){
//         moveBy += directionFactor.current * moveBy * velocityFactor.get();

//         baseX.set(baseX.get() + moveBy);
//     }

   
//   });

 
//   return (
//     <div className="parallax">
//       <motion.div className="scroller d-flex " style={{ x }}>
//         <motion.span  >{children} </motion.span>
        
//       </motion.div>
//     </div>
//   );
// }
// export { ParallaxText };