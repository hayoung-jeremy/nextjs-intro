import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        {/* using `` , ${} */}
        <a
          className={`${styles.default} ${
            router.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        {/* using [] , join(" ") */}
        <a
          className={[
            styles.default,
            router.pathname === "/about" ? styles.active : "",
          ].join(" ")}
        >
          About
        </a>
      </Link>
    </nav>
  );
};
export default NavBar;
