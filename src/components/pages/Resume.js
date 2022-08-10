import React from "react";
import resume from '../../images/KnoxResume.pdf'

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

export default function Resume() {
    return (
      <div style={styles.card}>
      <div style={styles.cardformat}>
      <div>
      <h2 style={styles.heading}>Front-End Experience</h2>
      <ul>
          <li >HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Foundation</li>
      </ul>
      <h2 style={styles.heading}>Back-End Experience</h2>
      <ul>
          <li>API's</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
      </ul>
      </div>
      <div>
        <p> -- </p>
      </div>
      <div>
        <h2 style={styles.heading}> Other Experience </h2>
        <ul>
        <li>
        <strong>CITY OF PHILADELPHIA, Philadelphia PA
Law Enforcement Intelligence Analyst		--			October 2019 - Current </strong>
Crime information management and intelligence analyst. Quantifies geo-data, historical records, crime data, and criminal history to create intelligence products for the Philadelphia Police Department
Processes critical data in the Real Time Crime Center to assist law enforcement with on demand jobs and live criminal activity
Creates analysis products for local, state, and federal law enforcement agencies with a focus on sharing intelligence clearly, concisely, and efficiently.
</li>
<p> </p>
<li>
<strong> VANGUARD Valley Forge, PA
Retirement Services  Specialist          		--			August 2017 - October 2019 </strong>                                                            
<p>Retirement Planning Specialized Services Associate. Advise high-balance 401(k) plan participants  on investment suitability, pre-tax, after-tax and Roth contribution maximization, plan rules and regulations,  and all loan and withdrawal options. 
Coach and mentor for trainees and facilitator for licensing curriculum
Senior representative for the ‘elevated hotline’: a dedicated channel to de-escalate challenging client concerns. 
Professional Development Council - PA ‘Career Pillar’ Owner - Part of a team focused on creating monthly events and deliverables with the goal to develop crew members professionally
Series 6 and 63 securities licenses completed August 2017.</p>
</li>
<p> </p>
<li>
<strong>TEMPLE UNIVERSITY HOUSING & RESIDENTIAL LIFE, Philadelphia, PA 
Building Manager, Conference Services Department		--		  May 2015- August 2017</strong>
<p>Collaborated with 5 conference assistants in Peabody Hall serving hospitality needs of guests
Promoted to Building Manager of Morgan South leading orientation, meetings, and crisis management
Ensured efficient customer service through planning with maintenance, residential life, and security departments </p>
</li>
<p> </p>
<li>
<strong> TEMPLE UNIVERSITY HOUSING & RESIDENTIAL LIFE, Philadelphia, PA Resident Assistant, Morgan Hall South                            --                                              August 2014-May 2017 </strong>
<p>Oversee safety & wellness needs of 80 undergraduate students among 10 floors in on campus dorm
Design and lead 8 programs a year targeted at student development and academic success
Teach and enforce Temple’s Student Code of Conduct promoting a disciplined living environment</p>
</li>
<p> </p>
<li>
<strong>TEMPLE UNIVERSITY SUMMER PROGRAMS DEPARTMENT, Philadelphia, PA		              
Social Media and Outreach Manager					  October 2016-May 2017 </strong>
<p>Brand management leader overseeing Facebook and Twitter department pages advertising programs & events 
Guide online enrollment process for prospects boosting enrollment by 60% for upcoming 2017 season 
Increase social media engagement with target audience members by 90% over a three-month period </p>
</li>
</ul>
      </div>
      </div>
      <a
        class="nav-link text-center"
        target="blank"
        href={resume}
        download
      >
        Click Here to Download Full Resume
      </a>
    </div>
    );
  }