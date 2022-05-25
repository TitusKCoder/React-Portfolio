import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    padding: 20,
  },
  pic: {
    marginLeft: '45%',
    marginRight: '45%'
  }
};

export default function About() {
  return (
    <div style={styles.card}>
      <h1 style={styles.heading}>About Page</h1>
      <div style={styles.content}>
        <p>
        My name is Titus. I'm 27 years old and live in Philadelphia, PA. I joined the bootcamp to learn something that's always changing and growing with the times. My dream career allows me to create alone sometimes, collaborate with people other times, and <strong>SOLVE PROBLEMS</strong>
        </p>
      </div>
    </div>
  );
}
