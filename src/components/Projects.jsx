
import { IoMdArrowRoundForward } from "react-icons/io";
import PropTypes from 'prop-types';

const Projects = ({ projects} ) => (
 <section className="section project" aria-label="my latest projects" id="project">
    <ul className="slider-list">
      {projects.slice().reverse().map((project, index) => (
        <li key={index} className="slider-item">
          <div className="project-card text-center">
            <div className="card-banner img-holder has-before">
              <img
                src={project.image.url}
                width={1000}
                height={763}
                loading="lazy"
                alt="project banner"
                className="img-cover"
              />
              <a href="#" className="btn btn:hover">
                <span className="span">Project Details</span>
                <IoMdArrowRoundForward />
              </a>
            </div>
            <div className="card-content">
              <p className="card-subtitle">Web, Product</p>
              <h3 className="title h3">
                <a href="#" className="card-title">
                 {project.title}
                </a>
              </h3>
            </div>
          </div>
        </li>
      ))}
    </ul>
 </section>
);

Projects.propTypes = {
  projects: PropTypes.arrayOf(
     PropTypes.shape({
       image: PropTypes.shape({
         url: PropTypes.string,
       }),
       title: PropTypes.string,
     })
  ),
 }
export default Projects;
