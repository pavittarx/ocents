import Link from "next/link";
import styles from "@/styles/pages/index.module.scss";

function Index() {
  return (
    <div className={ styles.indexStyles }>
      <h1> Ocents </h1>
      <img src="/illustration.svg" />
      <p> Thank you for stopping by.  </p>
      <p> Coming soon... </p>
    </div>
  );
}

export default Index;
