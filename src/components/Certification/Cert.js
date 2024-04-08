import React from "react";
import ResumeLeft from "../Resume/ResumeLeft/ResumeLeft";
import ResumeRight from "../Resume/ResumeRight/ResumeRight";
import dataCert from "./dataCert";


class Certification extends React.Component {

    render() {
        document.body.classList.add("resumeCV-bg");
        const data = dataCert.map((data) => {
            return (
                <div class="col">
                    <div class="card text-dark bg-light mb-3">
                        <div class="card-header">Header</div>
                        <div class="card-body">
                            <h5 class="card-title">Light card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            );
        });
        return (

            <main className="l-mainRS bd-containerCert">
                <div className="certfication" id="area-cv">
                    <h3>CHỨNG CHỈ VÀ CHỨNG NHẬN HỌC TẬP </h3>

                    <p>Danh sách chứng chỉ chứng nhận của về công nghệ trong quá trình làm việc và trau dồi kiến thức
                        bản thân </p>

                    <div class="container">
                        <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                            {data}
                        </div>
                    </div>

                </div>
                <div style={{ textAlign: "center" }}>
                    <a>Development by Bạch Đăng Tuấn</a>

                </div>
            </main>

        );
    }
}

export default Certification;