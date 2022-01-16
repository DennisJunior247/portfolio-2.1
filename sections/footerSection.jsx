import {} from "react";
import Image from "next/image";
import Link from "next/link";
import LinkedIn from "../images/icons/linkedin-2.svg";
import Github from "../images/icons/github.svg";
import Twitter from "../images/icons/twitter.svg";
import styles from "../styles/footer.module.scss";

export default function footerSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_line}></div>
      <div className={styles.footer_main}>
        <div className={styles.footer_links}>
          <Link
            passHref
            href="https://www.linkedin.com/in/dennis-junior-180957197/"
          >
            <p>
              <span>LN</span> <span />
              <Image
                alt="linkedin"
                width="25"
                height="25"
                src={LinkedIn}
              ></Image>
            </p>
          </Link>

          <Link passHref href="https://twitter.com/dennisjunior247">
            <p>
              <span>TW</span>
              <span />
              <Image alt="twitter" width="25" height="25" src={Twitter}></Image>
            </p>
          </Link>
          <Link passHref href="https://github.com/dennisjunior247">
            <p>
              <span>GH</span>
              <span />
              <Image alt="github" width="25" height="25" src={Github}></Image>
            </p>
          </Link>
        </div>
        <p className={styles.copy}>
          Copyright ©
          <Link href="https://github.com/dennisjunior247"> Dennis Junior</Link>
          <span> {new Date().getFullYear()}</span>, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
