import demo from "/assets/demo.mp4";
import styles from "./VideoPlayer.module.css";

const VideoPlayer: React.FC = () => {
  return (
    <>
    <section className={styles.sectionWrapper}>
      <p className="sr-only">A video walk through of the app. Audio is simple background music.</p>
      <p className={styles.videoSectionHeading}>Development Milestone: React Authenticated, User-Scoped Dashboard with Protected Routes and Cumulative Text, Tag & Date Filtering.</p>
      <p className={styles.videoSectionSubHeading}>Stack: React.js, Express.js, Node.js, MongoDB</p>
      <div className={styles.videoSectionContainer}>
          <video
            controls
            className={styles.videoSectionVideo}
            src={demo}
            // iOS prevent play in full screen mode
            playsInline
          />
        </div>
    </section>
    </>
  );
};

export default VideoPlayer;
