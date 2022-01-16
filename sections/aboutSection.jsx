import {} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Dennis from "../images/dennisImg.jpg";
import WavyHand from "../images/wavy 1.png";
import styles from "../styles/about.module.scss";
import { helloVariant } from "../variants/index.js";

export default function AboutSection() {
  return (
    <section className={styles.about_me} id="about">
      <div className={styles.about_me_main}>
        <div className={styles.about_me_main_s1}>
          <div className={styles.about_me_main_s1_p}>
            <h5>
              Hey there
              <motion.div
                initial={`hidden`}
                animate={`visible`}
                variants={helloVariant()}
                className={styles.wavyhand}
                //
              >
                <Image
                  src={WavyHand}
                  width={25}
                  height={25}
                  alt="My memoji smiling face"
                />
              </motion.div>{" "}
              , meet
            </h5>
            <h2>DENNIS JUNIOR</h2>
            <p>
              a software developer passionate about building pixel perfect
              interfaces and scalable appications that are easy and simple to
              use.I have over 2 years of expirence building production ready
              appications.
            </p>

            <button className={styles.hire_me_btn}>
              <Link
                href="https://docs.google.com/document/d/1x6FlTbMcjCUkx3te5bpsNluSY7jU1EzKBxlR6UPcI1g/edit#"
                target="_blank"
              >
                View Resume
              </Link>
            </button>
          </div>
        </div>
        <div className={styles.about_me_main_s2}>
          <Image
            src={Dennis}
            className={styles.memoji}
            alt="My memoji smiling face"
          />
        </div>
      </div>
    </section>
  );
}
