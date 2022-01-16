import {} from "react";
import Link from "next/link";
import { Envelope } from "phosphor-react";
import styles from "../styles/contact.module.scss";

export default function ContactSection() {
  return (
    <section className={styles.contact} id="contact">
      <h2>
        Get In Touch. <div />
        <Link passHref href="mailto:dennisjunior247@gmail.com">
          <Envelope color="#ABABAD" weight="regular" size={80} />
        </Link>
      </h2>
      <Link passHref href="mailto:dennisjunior247@gmail.com">
        <p>dennisjunior247@gmail.com</p>
      </Link>
      <Link passHref href="tel:+2349062709826">
        <p> +(234) 8116554737</p>
      </Link>
    </section>
  );
}
