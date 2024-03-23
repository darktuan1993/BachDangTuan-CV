import React from "react";
import dataCer from "./dataCer";

function CertificateRS() {
    const data = dataCer.map((data) => {
        return (

            <div key={data.title} className="certificateRS__container bd-flex">
                <img
                    src={data.image}
                    alt="Girl in a jacket"
                    width="30" height="30"/>
                <h4 className="certificateRS__title text-h4">{data.title}</h4>
            </div>

        )
            ;
    });
    return (
        <section className="certificateRS sectionRS" id="certificates">
            <h2 className="sectionRS-title text-h2">Certificates</h2>
            {data}
           <a href="cert">== Xem thêm tại đây == </a>
        </section>
    );
}

export default CertificateRS;
