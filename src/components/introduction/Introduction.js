import Button from "../button/Button"
import Image from "../image/Image"
import "./Introduction.css"

const Introduction = () => {
  return (
    <div className="intro-container">
      <div className="about-me">
        <h1>HI,</h1>
        <h1>MY NAME IS JASNA</h1>
        <p>
         Welcome to my portfolio.
        </p>
        <Button>Book a skype call</Button>
      </div>

      <Image
        src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/03/convert-png-to-jpg-12.jpg"
        alt="my image"
      />
    </div>
  )
}

export default Introduction
