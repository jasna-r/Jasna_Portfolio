import Button from "../button/Button"
import "./Introduction.css"
import logo from "../../assets/my_photo.jpg"

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="about-me">
        <h1>HI,</h1>
        <h1>MY NAME IS JASNA</h1>
        <p>
         Welcome to my portfolio.
         Take a look around...
         </p>
         <p>
         If you need hard-working Front-End Developer, organized and enthusiastic,
        willing to learn and work for your company, let's get in touch!
         
        </p>
        <Button>E-mail me</Button>
      </div>

      {/* <div className="image-wrapper"> */}
      <img src={logo} alt="my profile" className="about-me-img"/></div>
    // </div>
  )
}

export default Introduction
