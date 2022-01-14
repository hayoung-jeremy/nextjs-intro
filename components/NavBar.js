import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? "active" : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? "active" : ""}>About</a>
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          gap: 8px;
          background-color: #eee;
          padding: 16px;
          border-radius: 8px;
        }
        a {
          text-decoration: none;
          color: #888;
        }
        .active {
          color: #444;
          font-weight: 500;
        }
      `}</style>
    </nav>
  );
};
export default NavBar;
