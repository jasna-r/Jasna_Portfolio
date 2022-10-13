import ProjectCard from "../projectCard/ProjectCard"
import "./Projects.css"
import logo from "../../assets/rickAndMorty.PNG"
import logo1 from "../../assets/Capture.PNG"
import logo2 from "../../assets/Portfolio.PNG"

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-content">
        <h1>My Projects</h1>
        <p className="project-paragraph">
         Here are some of my projects, that I have been working on. 
        </p>
      </div>

      <div className="projects-card-wrapper">
        <ProjectCard
          src={logo}
          // src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project one"
          title="Rick and Morty App"
          text="Rick and Morty App- Github repo"
          projectlink="https://github.com/jasna-r/Rick_And_Morty_App.git"
          info="This responsive search app will allow you to find info about some of your favorite characters from the Rick & Morty show."
          
        />

        <ProjectCard
          src={logo1}
          // src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project two"
          title="Movie database App"
          text="Movie database App- Github repo"
          projectlink="https://github.com/jasna-r/movie-project.git"
          info="A web app created in React that allows a user to search for movies and find movies "
        />

        <ProjectCard
          src={logo2}
          // src="https://media.istockphoto.com/photos/project-management-with-icons-about-planning-tasks-and-milestones-on-picture-id1135541613?k=20&m=1135541613&s=612x612&w=0&h=rHctItxe3Vi5AGnLfm-Qa_PARqNXaxhlc3TbFYFe3nI="
          alt="project three"
          title="Portfolio App"
          text="Portfolio App- Github repo"
          projectlink="https://github.com/jasna-r/Jasna_Portfolio.git"
          info="My personal portfolio which features some of my github projects,little bit about me, as well as my technical skills."
        />
      </div>
    </div>
  )
}

export default Projects
