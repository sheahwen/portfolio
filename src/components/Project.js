import pantastic from "../images/screenshot_pantastic.PNG";
import airrnr from "../images/screenshot_airrnr.PNG";
import chess from "../images/screenshot_chess.PNG";

const Project = (props) => {
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
          {props.image === "2" ? (
            <img src={pantastic} />
          ) : props.image === "1" ? (
            <img src={airrnr} />
          ) : (
            <img src={chess} />
          )}
        </div>
      </div>
      <div className="projectRight">
        <div id="project-title">{props.title}</div>
        <div id="project-description">{props.description}</div>
        <div id="project-technologies">Technologies: {props.technologies}</div>
        <div id="project-github">
          Github:
          <a href={props.github} style={{ color: "#f5f5f5" }}>
            {props.github}
          </a>
        </div>
        {props.site ? (
          <div id="project-site">
            Site:
            <a href={props.site} style={{ color: "#f5f5f5" }}>
              {props.site}
            </a>
          </div>
        ) : (
          <div id="project-github">
            Github:
            <a href={props.github2} style={{ color: "#f5f5f5" }}>
              {props.github2}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
