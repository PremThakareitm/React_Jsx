import styles from "../about/About.module.css";
import Navigation from "../../components/Navigation";

function About() {
  return (
    <>
    <Navigation />
      <div className={styles.container}>
        <h1>About Page </h1>
      </div>
    </>
  );
}

export default About;
