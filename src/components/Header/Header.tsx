import Link from "next/link";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
      <Link href="/" className="project-title">
        <span className="">SPORTS </span>
        <span className="">MATCH</span>
      </Link>
      <nav>
        <ul className="navigation-container">
          <Link href={"/"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/sign-in"}>Sign in</Link>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
