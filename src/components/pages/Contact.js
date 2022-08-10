import React from 'react';

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
    boxShadow: "0 0 2px 0 black"
  },
  cardformat: {
    display: "flex",
    flexDirection: "row",
  },
  heading: {
    display: "flex",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
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

export default function Contact() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>
      <h2>Contact </h2>
      </div>
      <div style={styles.content}>
            <a style={styles.link} href='mailto:knoxtitus@gmail.com'>Email: knoxtitus@gmail.com </a>
            <p> </p>
            <a style={styles.link} target="blank" href='https://github.com/tituskcoder'>GitHub Repository</a>
            <p> </p>
            <a style={styles.link} target="blank" href='https://www.linkedin.com/in/titusknox/'>LinkedIn Webpage</a>
            <p> </p>
            <a style={styles.link} href='tel:215-594-7601'>Phone: 215-594-7601 </a>
          </div>
    </div>
  );
}
