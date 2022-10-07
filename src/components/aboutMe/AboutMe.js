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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        </p>
        <Button>Hire me!</Button>
      </div>
    </div>
  )
}

export default AboutMe
