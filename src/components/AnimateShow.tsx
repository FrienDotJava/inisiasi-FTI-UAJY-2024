import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  className: string | "";
}

const AnimateShow: FC<Props> = ({ children, className }: Props) => {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]}}
    >{children}</motion.div>
  );
};

export default AnimateShow;