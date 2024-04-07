import React from "react";
import ResumeLeft from "../Resume/ResumeLeft/ResumeLeft";
import ResumeRight from "../Resume/ResumeRight/ResumeRight";
import dataCert from "./dataCert";


class Certification extends React.Component {

    render() {
        document.body.classList.add("resumeCV-bg");
        // const data = dataCert.map((data) => {
        //     return (
        //         <button className="nav-link" id="v-pills-home-tab" data-bs-toggle="pill"
        //                 data-bs-target="#v-pills-home" type="button" role="tab"
        //                 aria-controls="v-pills-home" aria-selected="true">{data.name}
        //         </button>
        //     );
        // });
        return (

            <main className="l-mainRS bd-containerCert">
                <div className="certfication" id="area-cv">
                    <h3>CHỨNG CHỈ VÀ CHỨNG NHẬN HỌC TẬP </h3>

                    <p>Danh sách chứng chỉ chứng nhận của về công nghệ trong quá trình làm việc và trau dồi kiến thức
                        bản thân </p>

                    <div className="container">
                        <div class="d-flex align-items-start">
                            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist"
                                 aria-orientation="vertical">
                                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-home" type="button" role="tab"
                                        aria-controls="v-pills-home" aria-selected="true">Networking/System Certification
                                </button>
                                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-profile" type="button" role="tab"
                                        aria-controls="v-pills-profile" aria-selected="false"> Cloud Computing Certification
                                </button>
                                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-messages" type="button" role="tab"
                                        aria-controls="v-pills-messages" aria-selected="false">Platform Certification
                                </button>
                                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"
                                        data-bs-target="#v-pills-settings" type="button" role="tab"
                                        aria-controls="v-pills-settings" aria-selected="false"> Skill Certification
                                </button>
                            </div>
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                     aria-labelledby="v-pills-home-tab" tabindex="0"> Chứng chỉ mạng và hệ điều hành
                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                     aria-labelledby="v-pills-profile-tab" tabindex="0"> Chứng chỉ điện toán đám mây
                                </div>
                                <div class="tab-pane fade" id="v-pills-messages" role="tabpanel"
                                     aria-labelledby="v-pills-messages-tab" tabindex="0">Chứng chỉ liên quan đến platform
                                </div>
                                <div class="tab-pane fade" id="v-pills-settings" role="tabpanel"
                                     aria-labelledby="v-pills-settings-tab" tabindex="0">Chứng chỉ kĩ năng lập trình sử dụng tool
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{textAlign: "center"}}>
                    <a>Development by Bạch Đăng Tuấn</a>

                </div>
            </main>

        );
    }
}

export default Certification;