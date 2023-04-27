function Projects() {
  return (
    <div className="projects">
      <h1 className="aboutMustafa">Projects</h1>
      <div className="card-container">
        <div className="card">
          <a href="https://ibb.co/r4d0mqT">
            <img
              src="https://i.ibb.co/QrDQfhz/Screenshot-2023-02-13-at-3-54-21-AM.png"
              alt="Screenshot-2023-02-13-at-3-54-21-AM"
              className="card-image"
            />
          </a>
          <div className="card-description">
            <p>
              Movie app that tells you about the movie genre and description.
            </p>
            <a href="https://github.com/MusCodes/movie-sagas" target="_blank">
              <button className="card-button">GitHub</button>
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://ibb.co/3BddsFw">
            <img
              src="https://i.ibb.co/pJwwPKg/Screenshot-2023-02-06-at-11-21-22-PM.png"
              alt="Screenshot-2023-02-06-at-11-21-22-PM"
              className="card-image"
            />
          </a>
          <div className="card-description">
            <p>
              {" "}
              Feed back survey that students can submit to give teachers a
              deeper understanding of the students learning experience
            </p>
            <a
              href="https://github.com/MusCodes/redux-feedback-loop"
              target="_blank"
            >
              <button className="card-button">GitHub</button>
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://ibb.co/bPsjYHQ">
            <img
              src="https://i.ibb.co/478wCsK/Screenshot-2023-03-13-at-2-06-59-AM.png"
              alt="Screenshot-2023-03-13-at-2-06-59-AM"
              className="card-image"
            />
          </a>
          <div className="card-description">
            <p>
              {" "}
              Fitness Tracking app that allows users to keep track of progress
              in the gym
            </p>
            <a href="https://github.com/MusCodes/IronTracker" target="_blank">
              <button className="card-button">GitHub</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;


