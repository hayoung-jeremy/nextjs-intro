import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <img src="/vercel.svg" alt="versel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 20px 0;
          box-shadow: rgba(50, 50, 93, 0.05) 0px 50px 80px -40px,
            rgba(0, 0, 0, 0.15) 0px 30px 60px -26px;
        }
        nav > div {
          display: flex;
          gap: 12px;
        }
        nav a {
          font-size: 18px;
        }
        img {
          max-width: 100px;
          margin-bottom: 8px;
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
