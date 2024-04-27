import React from "react";
import me from "../../../../img/me.png";
import {clickGene} from "../../../Download/downloadCV"
import pdf from "../../../Download/bachdangtuan-cv.pdf"
import i18n from "i18next";
import {useTranslate} from "../../../../i18n/translate";


function HomeRS(props) {

    const selectTheme = () => {
        // Const
        const themeButton = document.getElementById("theme-button");
        const darkTheme = "dark-theme";
        const iconTheme = "bx-sun";
        //
        const selectedTheme = localStorage.getItem("selected-theme");
        const selectedIcon = localStorage.getItem("selected-icon");
        //
        const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light";

        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "bx-moon" : "bx-sun";
        //
        if (selectedTheme) {
            document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
            themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme);
        }
        // // Active
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem("selected-theme", getCurrentTheme());
        localStorage.setItem("selected-icon", getCurrentIcon());
    };
    const chuyenNgonNgu = useTranslate()
    const changeLanguage = (e) => {
        const languageValue = e.target.value
        console.log(languageValue)
        i18n.changeLanguage(languageValue);
    }

    return (<section className="homeRS" id="home">
        {/* Theme change button */}
        <i
            className="bx bx-moon change-theme"
            onClick={selectTheme}
            title="Theme"
            id="theme-button"
        />
        <div className="change-language">
            <select onChange={changeLanguage}>
                <option value="eng">English</option>
                <option value="vie">Tiếng Việt</option>
            </select>
        </div>
        <div className="homeRS__container sectionRS bd-gridRS">
            <div className="homeRS__data bd-gridRS">
                <img src={me} alt="avt" className="homeRS__img"/>
                <h1 className="homeRS__title text-h1">{chuyenNgonNgu("BACH DANG TUAN")}</h1>
                <h2 className="homeRS__profession text-h3">Devops / SRE / System Admin </h2>
                <div className="button-download">
                    <button title="Generate PDF" id="resume-button" className="btn-grad"
                            onClick={clickGene}>
                        {chuyenNgonNgu("download cv")}
                    </button>
                </div>
            </div>
            <div className="homeRS__address bd-gridRS">
                <span className="homeRS__infomartion">
            <i className="bx bx-calendar homeRS__icon"/> 27-02-1993
          </span>
                <span className="homeRS__infomartion">
            <i className="bx bx-map homeRS__icon"/> {chuyenNgonNgu("Hoang Mai, Ha Noi")}
          </span>
                <span className="homeRS__infomartion">
            <i className="bx bx-envelope homeRS__icon"/> {chuyenNgonNgu("bachdangtuan.dev@gmail.com")}
          </span>
                <span className="homeRS__infomartion">
            <i className="bx bx-phone homeRS__icon"/> 0934 01 07 04
          </span>
            </div>


        </div>

    </section>);
}

export default HomeRS;
