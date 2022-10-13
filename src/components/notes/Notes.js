import Card from "../card/Card"
import "./Notes.css"

const Notes = () => {
  return (
    <div className="notes-container">
      <Card
        src="data:image/png;base64,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"
        alt="skills"
        heading="Skills"
        text="HTML , CSS, JavaScript, React"
      />
      <Card
        src="data:image/png;base64,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"
        alt="Experience"
        heading="Experience"
        text="<CodeAcademy> Mk "
      />
      <Card
        src="data:image/png;base64,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"
        alt="Projects"
        heading="Projects"
        text=""
        attach="https://github.com/jasna-r"
      />
    </div>
  )
}

export default Notes
