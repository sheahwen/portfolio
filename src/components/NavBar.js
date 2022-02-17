const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navLeft">
        <a href="/" id="navHi">
          HI!
        </a>{" "}
        <a href="/" id="navHere">
          Sheah Wen here
        </a>
      </div>
      <div className="navRight">
        <a className="navItem" href="/about-me">
          About Me
        </a>
        <a className="navItem" href="/my-contacts">
          My Contacts
        </a>
        <a className="navItem" href="/projects">
          Past Projects
        </a>
      </div>
    </div>
  );
};

export default NavBar;
