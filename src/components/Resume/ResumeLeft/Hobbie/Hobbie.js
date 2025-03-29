import React from "react";
import dataSkills from "./dataSkills";
import "./Skills.css";
import { useTranslate } from "../../../../i18n/translate";
function HobbieRS() {
    const chuyenNgonNgu = useTranslate()
    const dataLeft = dataSkills.dataSkillsLeft.map((data) => {
        return (
            <li key={data.id} className="skillsRS__name">
                {/* <span className={data.dotSkill}/> */}
                {/* <i className={data.iconSkill}></i> */}
                <img src={data.image} alt="Certificate" width="40" height="40" />
                <span style={{ paddingLeft: "5px" }}>{data.nameSkill}</span>
            </li>

        );
    });
    const dataRight = dataSkills.dataSkillsRight.map((data) => {
        return (
            <li key={data.id} className="skillsRS__name">
                <img src={data.image} alt="Certificate" width="40" height="40" />
                <span style={{ paddingLeft: "5px" }}>{data.nameSkill}</span>
            </li>

        );
    });

    return (
        <section className="skillsRS sectionRS" id="skills">
            <h2 className="sectionRS-title text-h2">{chuyenNgonNgu("Interests")}</h2>
            <div className="skillsRS__content bd-gridRS">
                <ul className="skillsRS__data"> {dataLeft}</ul>
                <ul className="skillsRS__data">{dataRight}</ul>
            </div>
        </section>
    );
}

export default HobbieRS;
