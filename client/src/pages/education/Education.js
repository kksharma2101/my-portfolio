import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <div className="row">
          <div className="heading">
            <h1>Education</h1>
            <hr />
          </div>
          <div className="main-container">
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2017 - 2020"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  Becholar of Business
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  CCS University, Meerut
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2022 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<MdSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  Full-Stack Web Developer
                </h3>
                <h4 className="vertical-timeline-element-subtitle">PW Skill</h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
