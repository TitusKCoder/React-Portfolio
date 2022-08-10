import React from 'react';
import planner from "../../images/Dayplanner.PNG";
 import commerce from "../../images/EcommBackend.PNG";
import timesqu from "../../images/timesquare.PNG"

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  cardformat: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    padding: 20,
  },
  pic: {
    margin: 20,
    height: 300,
    width: 500,
    border: '3px solid black'
  },
  link: {
    color: "black",
    underline: "none"
  },
  center: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
    alignItems: "center",
    justifyContent: "centet"
  }
};

export default function Projects() {
  return (
    <article id="work">
          <section style={styles.card}>
        <div style={styles.heading}>
          <p>Timesquare Chat App</p>
        </div>
        <div style={styles.cardformat}>
          <img
            style={styles.pic}
            src={timesqu}
            alt="Timesquare chat app"
            />
        <div>    
          <a style={styles.link} target="blank" href="https://secret-badlands-36880.herokuapp.com/">
          <p style={styles.content}>
          This is my most recent project! This chat app uses the MERN stack and runs on Heroku. Specific frameworks include React, GraphQL, Express, Apollo Server, MongoDB, Mongoose ODM, Bcrypt, and Websockets. Click here to view the app.
          </p>
          </a>
          <p> </p>
          <a style={styles.link} target="blank" href="https://github.com/TitusKCoder/HourApp">
          <p style={styles.content}>
          Click here to view the source code
          </p>
          </a>
          </div>
            </div>
      </section>
          <div style={styles.card}>
            <div style={styles.heading}>
              <p>Day Planner</p>
            </div>
            <div style={styles.cardformat}>
              <img
                style={styles.pic}
                src={planner}
                alt="Work Day Planner"
              />
        <div>
          <a target="blank" href="https://tituskcoder.github.io/planner/">
          <p style={styles.link}>
          This simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app runs in the browser and features dynamically updated HTML and CSS powered by jQuery. Click here to view the web app.
          </p>
          </a>
          <p> </p>
          <a target="blank" href="https://github.com/TitusKCoder/planner">
          <p style={styles.link}>
          Click here to view source code
          </p>
          </a>
        </div>
        
            </div>
          </div>
      <section style={styles.card}>
            <div style={styles.heading}>
              <p>E-Commerce Back End</p>
        </div>
        <div style={styles.cardformat}>
              <img
                style={styles.pic}
                src={commerce}
                alt="E-Commerce"
              />
           <div style={styles.content}>
           <a target="blank" href="https://github.com/TitusKCoder/E-commerce">
            <p style={styles.link}>This backend only project gave me experience with with Node.js, MySQL2, Sequelize, dotenv, JavaScript, and Insomnia.</p>
            <p style={styles.link}> Click here to view the source code on GitHub</p>
            </a>

          </div>
        </div>
      </section>
    </article>
  );
}
