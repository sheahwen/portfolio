import NavBar from "./NavBar";
import Project from "./Project";
import Projects2025 from "./Projects2025";

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="projectPanel">
        <div className="projectYear">2025</div>

        <Projects2025 />

        <div className="projectYear">
          2022{" "}
          <span className="projectYearSpan">
            (It is built when I first learnt coding hence the Windows 98 look)
          </span>
        </div>
        <Project
          title="AIRRNR Restaurant & Reservation App"
          description="Web-based application for restaurant reservation with advance ordering and table assignment functions. The application allocates the smallest available table that meets the required number of diners"
          technologies="MERN (MongoDB, Express, React, Node.js) with JWT authentication and Material UI"
          github="https://github.com/alvingohhm/react_airrnr"
          github2="https://github.com/alvingohhm/airrnr_be"
          image="0"
        />
        <Project
          title="Pantastic Recipe App"
          description="Web-based application leverages on Spoonacular API and provide recipe ideas based on available ingredients and dietary needs. Users can bookmark recipes and add missing ingredients to their carts. "
          technologies="React, Node.js, Bootstrap, REST API, Redux"
          github="https://github.com/sheahwen/recipe"
          site="https://pantastic.netlify.app/"
          image="1"
        />
        <Project
          title="Bughouse Chess App"
          description="Web-based application to play bughouse chess – a chess variant for 2v2."
          technologies="HTML, Node.js, DOM Manipulatiuon"
          github="https://github.com/sheahwen/chess"
          site="https://sheahwen.github.io/chess/"
          image="2"
        />
      </div>
    </>
  );
};

export default Projects;
