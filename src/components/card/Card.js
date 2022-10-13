import "./Card.css"

const Card = ({ src, alt, heading, text, attach }) => {
  return (
    <div className="card-container">
      <img className="icon-img" src={src} alt={alt} />
      <h5>{heading}</h5>
      <p className="text">{text}</p>
      <a href={attach} target="new">{attach}</a>
    </div>
  )
}

export default Card
