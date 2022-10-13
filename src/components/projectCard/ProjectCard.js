import "./ProjectCard.css"

function ProjectCard({ src, alt, title, text, info, projectlink }) {
  return (
    <div className="project-card-container">
      <img className="project-img" src={src} alt={alt} />
      <h3>{title}</h3>
      <a href={projectlink} className="content" target="new">{text}</a>
      <span>
        {info} {">"}
      </span>
    </div>
  )
}

export default ProjectCard
