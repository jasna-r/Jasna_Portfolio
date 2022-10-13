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
      <div className="about-me-content">
        <h2>About me</h2>
        <p>
        I am freshly certified Front-End developer.
        Just finished the Academy for Coding.
        </p>
        <p>
          Previously I was learning from online courses for HTML, CSS and JavaScript, especially when the pandemic started.
          </p>
          <p> A year ago I decided that I genuinely want to expand my knowledge and in fact coding to become my occupation in the near future.
        So, I signed up at CodeAcademy in Skopje.
        </p>
        <p>
        At the same time I was working my full time job and constantly learning.
        Gained knowledge for the technologies I have mentioned in the skills section.
        </p>
        <p>
        And here I am now, willing to change my carreer. 
        </p>
        <p>
        So, please, take a look at some of my work, bellow I have some of my Github links.
        </p>
        
        <Button>Hire me!</Button>
      </div>
    </div>
  )
}

export default AboutMe
