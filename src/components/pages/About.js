import React from 'react';
import mainpic from '../../images/1517357457027.jpg';
import otherpic from '../../images/profilepic22.png'

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
    height: 300,
    width: 500,
  }
};

export default function About() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>
      <h2> About Me</h2>
      </div>
      <div style={styles.cardformat}>
        <img style={styles.pic}
        src={mainpic}></img>
      <div style={styles.content}>
        <p>
        My name is Titus. I'm 28 years old and live in Philadelphia, PA. In 2017, I earned my Bachelors in Criminal Justice with a focus on Information Science/Technology at Temple University. During my time at Vanguard and in my current role as an Intelligence Analyst for the City of Philadelphia, I expanded my skillset in analysis, communicating effectively with key stakeholders, and peer development.
        </p>
        <p> </p>
        <p>
          I joined University of Pennsylavania's full stack coding bootcamp to learn a skill that's always evolving and fit my interest in technology and electronics. My dream career in tech allows me to create independently sometimes, collaborate with colleagues other  times, and <strong>SOLVE PROBLEMS</strong>!
        </p>
      </div>
        <img style={styles.pic}
            src={otherpic}/>
      </div>
    </div>
  );
}
