import "./ProjectCard.css"

function ProjectCard({ src, alt, title, text, info }) {
  return (
    <div className="project-card-container">
      <img className="project-img" src={src} alt={alt} />
      <h3>{title}</h3>
      <p className="content">{text}</p>
      <span>
        {info} {">"}
      </span>
    </div>
  )
}

export default ProjectCard
