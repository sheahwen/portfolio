import NavBar from "./NavBar";

const MyContacts = () => {
  return (
    <div>
      <NavBar />
      <div className="contactBody">
        <div className="contactCol" id="contactColOne">
          <a id="contactLinked" href="https://www.linkedin.com/in/sheahwen">
            https://www.linkedin.com/in/
          </a>
          <br />
          <a id="contactGithub" href="https://github.com/sheahwen">
            https://github.com/
          </a>
        </div>
        <div className="contactCol" id="contactColTwo">
          sheahwen
        </div>
        <div className="contactCol" id="contactColThree">
          <div className="gmail" id="1" style={{ color: "#4285F4" }}>
            @
          </div>
          <div className="gmail" id="2" style={{ color: "#BB001B" }}>
            g
          </div>
          <div className="gmail" id="3" style={{ color: "#BB001B" }}>
            m
          </div>
          <div className="gmail" id="4" style={{ color: "#BB001B" }}>
            a
          </div>
          <div className="gmail" id="5" style={{ color: "#EA4335" }}>
            i
          </div>
          <div className="gmail" id="6" style={{ color: "#EA4335" }}>
            l
          </div>
          <div className="gmail" id="7" style={{ color: "#FBBC05" }}>
            .
          </div>
          <div className="gmail" id="8" style={{ color: "#FBBC05" }}>
            c
          </div>
          <div className="gmail" id="9" style={{ color: "#FBBC05" }}>
            o
          </div>
          <div className="gmail" id="10" style={{ color: "#34A853" }}>
            m
          </div>
        </div>
      </div>
      <div id="phoneNo">📞 +65 9692 7374</div>
    </div>
  );
};

export default MyContacts;
