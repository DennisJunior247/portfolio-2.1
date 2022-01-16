import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import LinkedIn from "../images/icons/linkedin-2.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import { motion } from "framer-motion";

import {
  partVariant,
  navLinkVariant,
  navSocialVariant,
  navVariant,
} from "../variants/index.js";

function Navbar({ setNav, show_nav }) {
  return (
    <>
      <motion.div
        initial={`hidden`}
        exit={`exit`}
        animate={show_nav ? `visible` : ``}
        variants={navVariant(0.6)}
        className={styles.nav_bar}
      >
        <motion.div
          initial={`hidden`}
          exit={`exit`}
          animate={show_nav ? `visible` : ``}
          variants={partVariant(0)}
          className={`${styles.nav_bar_part} ${styles.nav_bar_part_one}`}
        ></motion.div>

        <motion.div
          initial={`hidden`}
          animate={show_nav ? `visible` : ``}
          exit={`exit`}
          variants={partVariant(0.2)}
          className={`${styles.nav_bar_part} ${styles.nav_bar_part_two}`}
        >
          <motion.p variants={navLinkVariant(1)} onClick={() => setNav(false)}>
            <Link href="#about">About Me</Link>
          </motion.p>
          <motion.p
            variants={navLinkVariant(0.8)}
            onClick={() => setNav(false)}
          >
            <Link href="#projects">Projects</Link>
          </motion.p>
          <motion.p
            variants={navLinkVariant(0.6)}
            onClick={() => setNav(false)}
          >
            <Link href="#contact">Contact</Link>
          </motion.p>
        </motion.div>

        <motion.div
          initial={`hidden`}
          animate={show_nav ? `visible` : ``}
          exit={`exit`}
          variants={partVariant(0.4)}
          className={`${styles.nav_bar_part} ${styles.nav_bar_part_three}`}
        ></motion.div>

        <motion.div
          initial={`hidden`}
          animate={show_nav ? `visible` : ``}
          exit={`exit`}
          variants={partVariant(0.6)}
          className={`${styles.nav_bar_part} ${styles.nav_bar_part_four}`}
        >
          <Link
            passHref
            href="https://www.linkedin.com/in/dennis-junior-180957197/"
          >
            <motion.p variants={navSocialVariant(0.8)}>
              <span>Linkedin</span>{" "}
              <Image
                alt="linkedin"
                width="25"
                height="25"
                src={LinkedIn}
              ></Image>
            </motion.p>
          </Link>

          <Link passHref href="https://twitter.com/dennisjunior247">
            <motion.p variants={navSocialVariant(1)}>
              <span>Twitter</span>{" "}
              <Image alt="twitter" width="25" height="25" src={Twitter}></Image>
            </motion.p>
          </Link>

          <Link passHref href="https://github.com/DennisJunior247">
            <motion.p variants={navSocialVariant(1.2)}>
              <span>Github</span>{" "}
              <Image alt="git" width="25" height="25" src={Github}></Image>
            </motion.p>
          </Link>
        </motion.div>

        <h1 className={`${styles.nav_email}`}>
          <marquee>dennisjunior247@gmail.com</marquee>
        </h1>
      </motion.div>
    </>
  );
}

export default Navbar;
