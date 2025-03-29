import React from "react";
import dataCer from "./dataCer";
import {useTranslate} from "../../../../i18n/translate";

function CertificateRS() {
    const chuyenNgonNgu = useTranslate()
    const data = dataCer.map((data) => {
        return (

            <div key={data.title} className="certificateRS__container bd-flex">
                <img  src={data.image}alt="Certificate"width="50" height="50"/>
                {/* <i className={data.icon} ></i> */}
                <a href={data.link} target="_blank"  className="certificateRS__title text-h4"
                   style={{margin: 0}}>{data.title} <small style={{fontStyle: "italic"}}>(click verify)</small> </a>
            </div>

        )
            ;
    });
    return (
        <section className="certificateRS sectionRS" id="certificates">
            <h2 className="sectionRS-title text-h2">{chuyenNgonNgu("Certificates & Verify")}</h2>
            {data}
            {/*<a href="certification">== {chuyenNgonNgu("more")} == </a>*/}
        </section>
    );
}

export default CertificateRS;
