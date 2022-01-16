import React from "react";
import Image from "next/image";
import styles from "../styles/preloader.module.scss";
import { motion, AnimatePresence } from "framer-motion";
import Loader from ".././images/[removal 1.png";
export default function Preloader() {
  return (
    <motion.div
      exit={{ opacity: 0, scale: 2.5 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={styles.preloader}
    >
      <Image
        src={Loader}
        // className={styles.memoji}
        alt="My memoji smiling face"
      />
    </motion.div>
  );
}
