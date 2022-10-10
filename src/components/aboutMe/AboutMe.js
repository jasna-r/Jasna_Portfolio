import React from "react"
import Button from "../button/Button"
import Image from "../image/Image"
import "./AboutMe.css"

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <Image
          
        src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/03/convert-png-to-jpg-12.jpg"
        
        alt="my image"
      />
      <div className="about-me">
        <h1>ABOUT ME</h1>
        <p>
        I am freshly certified Front-End developer.
          Just finished with the coding academy, and I am in need for an experience, to get experience.
        </p>
        <p>
        You can check my projects, the knowledge i have gained and the skills i have learned
      . It's not much, but it's honest work.
        </p>
        <Button>Hire me!</Button>
      </div>
    </div>
  )
}

export default AboutMe
