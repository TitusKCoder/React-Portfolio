import React from 'react';
import pizza from "../../images/StucciosPizza.png";
import planner from "../../images/Dayplanner.PNG";
import quiz from "../../images/CodeQuiz.PNG";
import commerce from "../../images/EcommBackend.PNG";

const styles = {
  big: {
    width: "75%",
    marginLeft: "12%",
    marginRight: "12%",
  },
  small: {
    marginLeft: "20%",
    marginRight: "20%",
    paddingTop: "5%",
  },
};

export default function Projects() {
  return (
    <article id="work">
      <h2 className="text-center">Projects</h2>
      <section className="card" style={styles.big}>
        <a target="blank" href="https://stuccos-pizzeria-23709.herokuapp.com/">
          <img
            className="img-fluid max-width: 100% height: auto"
            src={pizza}
            alt="Stucco's Pizzeria"
          />
        </a>
        <div className="textContain">
          <p>Stucco's Pizzeria E-Commerce</p>
        </div>
      </section>
      <section className="container" style={styles.small}>
        <div className="row">
          <div className="col-6 justify-content-center">
            <a target="blank" href="https://tituskcoder.github.io/planner/">
              <img
                className="img-fluid max-width: 100% height: auto"
                src={planner}
                alt="Work Day Planner"
              />
            </a>
            <div className="textContain">
              <p>Day Planner</p>
            </div>
          </div>
          <div className="col-6 justify-content-center">
            <a target="blank" href="https://github.com/TitusKCoder/CodeQuiz">
              <img
                className="img-fluid max-width: 100% height: auto"
                src={quiz}
                alt="Coding Quiz"
              />
            </a>
            <div className="textContain">
              <p>Coding Quiz</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container" style={styles.small}>
        <div className="row">
          <div className="col-6 justify-content-center">
            <a
              target="blank"
              href="https://github.com/TitusKCoder/E-commerce"
            >
              <img
                className="img-fluid max-width: 100% height: auto"
                src={commerce}
                alt="E-Commerce"
              />
            </a>
            <div className="textContain">
              <p>E-Commerce Back End</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
