import React from "react";
import dataWorks from "./dataWork";

function Work() {
  const dataWork = dataWorks.map((data) => {
    return ( 
   <div key={data.eduTitle}>
        <div className="educationRS__content">
        <div className="educationRS__time">
          <span className="educationRS__rounder" />
          <span className={data.line} />
        </div>
        <div className="educationRS__data bd-gridRS">
          <h3 className="educationRS__title text-h3">{data.eduTitle}</h3>
          <span className="educationRS__studies">{data.eduCourse}</span>
          <span className="educationRS__year">{data.eduTimes}</span>
        </div>
      </div>
   </div>
    );
  });
  return (
    <section className="educationRS sectionRS" id="education">
      <h2 className="sectionRS-title text-h2">Working</h2>

      <div className="educationRS__container bd-gridRS">{dataWork}</div>
    </section>
  );
}

export default Work;
