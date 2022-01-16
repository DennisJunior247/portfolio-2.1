import {} from "react";
import VideoChat from "../images/videochat.png";
import Food from "../images/food.png";
import LF from "../images/lf.png";
import Project from "../component/project";
import styles from "../styles/portfolio.module.scss";

export default function PortfolioSection() {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles.projects_heading}>
        <p className={styles.projects_heading_p}>Featured Projects</p>
        <div className={styles.projects_heading_arrow}></div>
      </div>

      <Project
        img={VideoChat}
        name="Video Chat App"
        text="A video chat app for real time video call"
        tools="Node,NEXTJS, Socket.io"
        link="https://video-chatapp.vercel.app/"
        github="https://github.com/DennisJunior247/video-chatapp"
      />

      <Project
        img={Food}
        name="Food recipie"
        text="Simple app for finding food recipes "
        tools="NODEJS, EXPRESS, REACTJS"
        link="https://find-your-recipes.vercel.app/"
        github="https://github.com/DennisJunior247/ReactRecipeApp"
      />

      <Project
        img={LF}
        name="Learn Factory Website"
        text="Learn Factory Website"
        tools="FRAMER MOTION, NEXTJS"
        link="https://learnfactory.com.ng/"
        // github="https://github.com/ugwustanley/portfolio"
      />
    </section>
  );
}
