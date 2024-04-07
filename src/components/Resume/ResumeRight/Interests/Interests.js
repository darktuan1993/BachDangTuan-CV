import React from "react";
import dataInter from "./dataInter";
import {useTranslate} from "../../../../i18n/translate";

function InterestRS() {
    const chuyenNgonNgu = useTranslate()
    const data = dataInter.map((data) => {
        return (
            <div key={data.name} style={{marginBottom: "1rem"}}>
                <div className="interestsRS__content">
                    <i className={data.icon}/>
                    <b className="interestsRS__name">{data.name}</b>
                </div>
                <div>
                    <i>
                        {data.purpose}
                    </i>
                    <p>Kiến trúc</p>
                    <span> {data.architechture} </span>
                    <p>
                        Frontend: {data.technologyFE}
                    </p>
                    <p>
                        Backend: {data.technologyBE}
                    </p>
                </div>
            </div>
        )
    })
    return (
        <section className="interestsRS sectionRS" id="interests">
            <h2 className="sectionRS-title text-h2">{chuyenNgonNgu("DEVELOPING APPLICATION FOR WORK")}</h2>
            <div className="interestsRS__container">
                {data}
            </div>

        </section>
    );
}

export default InterestRS;
