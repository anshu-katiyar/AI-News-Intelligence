import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {

    return(

<motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="flex flex-col items-center justify-center text-center mt-24"
>

<motion.h1
  initial={{ scale: 0.8 }}
  animate={{ scale: 1 }}
  transition={{ duration: 0.8 }}
  className="text-6xl font-bold"
>

AI News Intelligence

</motion.h1>

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="text-gray-400 text-xl mt-6 max-w-3xl"
>

Summarize news, detect sentiment,
extract keywords, identify entities,
analyze PDFs and chat with AI.

</motion.p>

<motion.div
  initial={{ y: 30, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.8 }}
>
  <Link

to="/login"

className="mt-10 bg-cyan-500 px-8 py-4 rounded-xl text-xl hover:bg-cyan-600"

>

🚀 Get Started

</Link>
</motion.div>

</motion.div>
    );

}

export default Hero;