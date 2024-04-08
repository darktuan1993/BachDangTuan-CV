import React from "react";
import CertificateRS from "./Certificates/Certificates";
import ExperienceRS from "./Experience/Experience";
import InterestRS from "./Interests/Interests";
import LanguageRS from "./Languages/Languages";
import ReferenceRS from "./References/References";
import "./ResumeRight.css";
import ProfileRS from "../ResumeLeft/Profile/Profile";
import EducationRS from "../ResumeLeft/Education/Education";

function ResumeRight() {
    return (
        <div className="resume__right">
            <ProfileRS/>
            {/* <ExperienceRS/> */}
            {/*<EducationRS/>*/}
            {/* <InterestRS/> */}
        </div>
    );
}

export default ResumeRight;
