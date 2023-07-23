import { motion } from "framer-motion";
const animationConfiguration = {
	initial: { scaleX: 0 },
	animate: { scaleX: 1, },
	exit: { scaleX: 0 },
};
const Transition = ({ children }) => {
	return (
		<motion.div
			variants={animationConfiguration}
			initial="initial"
			animate="animate"
			exit="exit"

			transition={{ duration: 0.7 }}
		>
			{children}
		</motion.div>
	);
};
export default Transition;
