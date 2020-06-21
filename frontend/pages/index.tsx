import Link from "next/link";
import styles from "@/styles/pages/index.module.scss";

function Index(){
  return <> 
  <h1> This is the main page. </h1>
  <Link href="/about"><a> About Page</a></Link>
  </>;
}

export default Index;