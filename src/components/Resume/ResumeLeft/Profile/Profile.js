import React from 'react'
import {useTranslate} from "../../../../i18n/translate";

function ProfileRS() {
    const chuyenNgonNgu = useTranslate()
    return (
        <section className="profileRS sectionRS" id="profile">
            <h2 className="sectionRS-title text-h2">{chuyenNgonNgu("profile")}</h2>
            <p className="profileRS__description">
                Xin chào, tôi là Bạch Đăng Tuấn, một IT với nhiều năm kinh nghiệm nghề.
                Tôi tốt nghiệp cử nhân nghành An Toàn Thông Tin tại trường Học Viện Kĩ Thuật Mật Mã.
            </p>
            <p>
                Tôi là yêu thích công nghệ và luôn trau dồi học hỏi công nghệ mới, ngoài kĩ năng quản trị hệ thống
                tôi có thể áp dụng kĩ năng, tư duy lập trình để tự động và tối ưu hóa thời gian xử lý, giúp công việc
                đạt hiệu quả.
            </p>
        </section>

    )
}

export default ProfileRS
