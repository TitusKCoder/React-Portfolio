import React from "react";
import resume from '../../images/Resume.PNG'

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

export default function Resume() {
    return (
      <div style={styles.card}>
      <h1 className="text-center">Resume</h1>
      <ul >
                    <li >HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Foundation</li>
                </ul>
                <h4>Back-End Proficiencies</h4>
                <ul>
                    <li>API's</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
      <a
        class="nav-link text-center"
        target="blank"
        href={resume}
        download
      >
        Click to Download Resume
      </a>
    </div>
    );
  }