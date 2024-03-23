import React from "react";
import dataExp from "./dataExp";

function ExperienceRS() {
    const data = dataExp.map((data) => {
        return (
            <div key={data.title}>
                <div className="experienceRS__content">
                    <div className="experienceRS__time">
                        <span className="experienceRS__rounder"/>
                        <span className={data.line}/>
                    </div>
                    <div className="experienceRS__data bd-gridRS">
                        <h3 className="experienceRS__title text-h3">{data.title}
                            <span className="experienceRS__company"> ({data.times})</span>
                        </h3>
                        <a href={data.link} target="_blank" rel="noreferrer"
                           className="experienceRS__company">{data.link}</a>
                        <p className="experienceRS__description" > Position: {data.position}</p>
                        <p className="experienceRS__description">{data.usedTech}</p>
                        <p className="experienceRS__description">{data.descripttion}</p>
                        <p className="experienceRS__description">{data.descripttion2}</p>
                        <p className="experienceRS__description">{data.descripttion3}</p>
                        <p className="experienceRS__description">{data.descripttion4}</p>
                        <p className="experienceRS__description">{data.descripttion6}</p>
                        <p className="experienceRS__description">{data.descripttion7}</p>
                        <p className="experienceRS__description">{data.descripttion8}</p>
                        <p className="experienceRS__description">{data.descripttion5}</p>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <section className="experienceRS sectionRS" id="experience">
            <h2 className="sectionRS-title text-h2">Experience</h2>
            <div className="experienceRS__container bd-gridRS">{data}</div>
        </section>
    );
}

export default ExperienceRS;
