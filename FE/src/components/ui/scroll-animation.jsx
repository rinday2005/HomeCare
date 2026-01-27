import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const ScrollAnimation = ({
    children,
    className,
    animation = "fade-up", // fade-up, fade-in, slide-left, slide-right, scale-up
    delay = 0,
    duration = 0.5,
    viewport = { once: true, margin: "-50px" }
}) => {

    const variants = {
        "fade-up": {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 }
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        "slide-left": {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        "slide-right": {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        },
        "scale-up": {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            transition={{ duration, delay, ease: "easeOut" }}
            variants={variants[animation] || variants["fade-up"]}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
