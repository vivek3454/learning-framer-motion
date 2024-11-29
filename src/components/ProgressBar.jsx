import { motion } from "motion/react";

function ProgressBar() {
    return (
        <div className="mt-6 text-white">
            <div className="w-full h-2 rounded overflow-hidden bg-white">
                <motion.div
                    animate={{
                        width: "100%",
                    }}
                    transition={{
                        duration: 10,
                    }}
                    className="w-1/12 h-full bg-cyan-300"
                ></motion.div>
            </div>
        </div>
    );
}

export default ProgressBar;
