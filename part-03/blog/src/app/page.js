import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Home Page <User userName="PRANJAL GOGOI" />
      </h1>
      <h1>
        About Page <User userName="KRISHNA YADAV" />
      </h1>
      <h1>
        Contact Us <User userName="RAHUL SINGH" />
      </h1>
    </main>
  );
}

const User = ({ userName }) => {
  return <span>| {userName} |</span>;
};
