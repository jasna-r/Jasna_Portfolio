import ProjectCard from "../projectCard/ProjectCard"
import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1>My Projects</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="projects-card-wrapper">
        <ProjectCard
          src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project one"
          title="Project one"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          info="Some info"
        />

        <ProjectCard
          src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project two"
          title="Project two"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          info="Some info"
        />

        <ProjectCard
          src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project three"
          title="Project three"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
          info="Some info"
        />
      </div>
    </div>
  )
}

export default Projects
