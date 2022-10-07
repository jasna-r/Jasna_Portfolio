import "./Card.css"

const Card = ({ src, alt, heading, text }) => {
  return (
    <div className="card-container">
      <img className="icon-img" src={src} alt={alt} />
      <h5>{heading}</h5>
      <p className="text">{text}</p>
    </div>
  )
}

export default Card
