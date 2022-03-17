import Link from "next/link";

import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">
            <a>HOME</a>
          </Link>
        </li>
        <li>
          <Link href="/add-post">
            <a>ADD POST</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
