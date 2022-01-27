import NavBar from "./NavBar";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="projectPanel">
        <Project />
        <Project />
        <Project />
      </div>
    </>
  );
};

export default Projects;
