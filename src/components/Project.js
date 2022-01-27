import pantastic from "../images/screenshot_pantastic.PNG";
const Project = () => {
  return (
    <div className="projectCard">
      <div className="browser">
        <div id="line-one">
          <div className="circleGroup">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
        <div id="line-two">
          <img src={pantastic}></img>
        </div>
      </div>
      <div className="projectRight">
        <div id="project-title">Pantastic Recipe App</div>
        <div id="project-description">Add a short description</div>
        <div id="project-technologies">Technologies: </div>
        <div id="project-github">Github: </div>
        <div id="project-site">Site: </div>
      </div>
    </div>
  );
};

export default Project;
