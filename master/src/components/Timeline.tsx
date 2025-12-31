import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career and Education</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2023 - Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">BSc Computer Science</h3>
            <h4 className="vertical-timeline-element-subtitle">University of KwaZulu-Natal</h4>
            <p>
              Awarded Dean's Commendation and achieved high proficiency in core engineering disciplines, including Artificial Intelligence, Databases and Programming, Data Structures, and Advanced Programming.
            </p>
            <p>
              Strong mathematical foundation for algorithmic development, covering Discrete Mathematics with Applications, Advanced Calculus & Linear Algebra, and Theory of Computation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2024 - Nov 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Private Tutor - Mathematics & Information Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">KG TUITIONS</h4>
            <p>
              Simplified complex mathematical and programming concepts for high school students, improving their average grades by 17%.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2024 - Feb 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Seasonal Employee</h3>
            <h4 className="vertical-timeline-element-subtitle">CLICKS GROUP</h4>
            <p>
              Maintained high operational efficiency in a high-volume retail environment; achieved 99% transaction accuracy and resolved customer queries under pressure.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2018 - Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor's Degree Pass</h3>
            <h4 className="vertical-timeline-element-subtitle">Greenbury Secondary</h4>
            <p>
              Excelled in Information Technology (92%) and Mathematics (89%).
            </p>
            <p>
              Awarded the New West Bursary for Advanced Mathematics and Robotics.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;