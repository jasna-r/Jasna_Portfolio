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
         Welcome to my portfolio.<br></br>
         I am freshly certified Front-End developer.
          Just finished with the coding academy, and I am in need for an experience, to get experience.
          <br></br>You can check my projects, the knowledge i have gained and the skills i have learned
      . It's not much, but it's honest work.
      <br></br>
        </p>
        <Button>Book a skype call</Button>
      </div>

      <Image
      src="../../assets/182884692_10224731030440614_9121013417446366466_n.jpg"
        // src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/03/convert-png-to-jpg-12.jpg"
        alt="my image"
      />
    </div>
  )
}

export default Introduction
