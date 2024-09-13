import styles from "./page.module.css";
import StaticOne from "../../components/StaticOne";
import ScrollIntroduction from "../../components/ScrollIntroduction";
import ScrollAreas from "../../components/ScrollAreas";
import ScrollProjects from "../../components/ScrollProjects";
import ScrollSkills from "../../components/ScrollSkills";
import ScrollSocial from "../../components/ScrollSocial";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.static}>
        <StaticOne />
      </div>
      <div className={styles.scrollable}
      style={{height: '100vh', overflowY: 'auto'}}>
            <ScrollIntroduction />
            <ScrollAreas />
            <ScrollProjects />
            <ScrollSkills />
            <ScrollSocial />
      </div>
  </div>
  );
}
