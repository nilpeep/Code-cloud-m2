import "./Projects"
import image1 from "../../scss/abstracts/img/project-1.jpg"
import image2 from "../../scss/abstracts/img/project-2.jpg"
import image3 from "../../scss/abstracts/img/project-3.jpg"
import image4 from "../../scss/abstracts/img/project-4.jpg"
import image5 from "../../scss/abstracts/img/project-5.jpg"
import image6 from "../../scss/abstracts/img/project-6.jpg"
const Projects = () => {
  return (
    <main className="projects">
      <div className="projects__items">
        <div className="projects__item">
          <img src={image1} alt="My Project" />
        </div>

        <div className="projects__item">
          <img src={image2} alt="My Project" />
        </div>
        <div className="projects__item">
          <img src={image3} alt="My Project" />
        </div>
        <div className="projects__item">
          <img src={image4} alt="My Project" />
        </div>

        <div className="projects__item">
          <img src={image5} alt="My Project" />
        </div>
        <div className="projects__item">
          <img src={image6} alt="My Project" />
        </div>
      </div>
    </main>
  )
}

export default Projects