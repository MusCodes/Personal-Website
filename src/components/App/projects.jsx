import React from "react";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="projects">
      <h1 className="projects">Projects</h1>

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
              Web application that has posters of popular movies. Once a user
              clicks on the movie poster, they are taken to another page that
              displays the movie description, genre, and rating.
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
              Survey app that takes feedback surveys that students can submit to
              give teachers a deeper understanding of the student's learning
              experience.
            </p>
            <a
              href="https://github.com/MusCodes/redux-feedback-loop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="card-button">GitHub</button>
            </a>
          </div>
        </div>

        <div className="card">
          <a href="https://ibb.co/D8KB4hB">
            <img
              src="https://i.ibb.co/CM0jBgj/Screenshot-2023-06-06-at-1-11-14-AM.png"
              alt="Screenshot-2023-06-06-at-1-11-14-AM"
              className="card-image"
            />
          </a>
          <div className="card-description">
            <p>
              This is one of my first projects, a to do list. Easily create,
              manage, and prioritize your tasks with a user-friendly interface.
              Check off completed tasks, and they'll be moved to the bottom of
              the list and highlighted in red.This application will help you
              Stay organized and boost your productivity.
            </p>
            <a
              href="https://github.com/MusCodes/weekend-sql-to-do-list"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="card-button">GitHub</button>
            </a>
            
            <a
              href="https://mm-todo.fly.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="card-button">Website</button>
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
              Mobile-first app that tracks exercises, reps, and weight.
              IronTracker also has a page that allows you to search for an
              exercise or a body part, and it will display a GIF showing the
              user how to perform the exercise.
            </p>
            <a
              href="https://github.com/MusCodes/IronTracker"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="card-button">GitHub</button>
            </a>
          </div>
        </div>
        <div className="card-container">
          <div className="card">
            <a href="https://ibb.co/Qb5zb8t">
              <img
                src="https://i.ibb.co/FxPNxsC/Screenshot-2023-06-06-at-1-26-23-AM.png"
                alt="Screenshot-2023-06-06-at-1-26-23-AM"
                border="0"
              />
            </a>
            <div className="card-description">
              <p>
                Collaborated with Richland Music Parents to streamline the
                ordering process for their community calendar through the
                creation of a sophisticated web application. This innovative
                platform provides users with the ability to effortlessly
                purchase calendars and add events to the community calendar,
                while granting administrators extensive control over event
                management tasks, such as viewing, delivering, and deleting
                events.
              </p>
              <a
                href="https://github.com/MusCodes/movie-sagas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="card-button">GitHub</button>
              </a>
            
              <a
                href="https://richland-music-parents.fly.dev/#/splashPage"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="card-button">Website</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
