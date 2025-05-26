import React from 'react'
import {useTranslate} from "../../../../i18n/translate";

function ProfileRS() {
    const chuyenNgonNgu = useTranslate()
    return (
        <section className="profileRS sectionRS" id="profile">
            <h2 className="sectionRS-title text-h2">{chuyenNgonNgu("profile")}</h2>
            {/* <p className="profileRS__description">
                {chuyenNgonNgu("- My name is Bach Dang Tuan, I am an IT engineer with many years of experience.")}
            </p> */}
            <p> {chuyenNgonNgu("- Tốt nghiệp kỹ sư chuyên ngành Công nghệ thông tin tại Học Viện Kỹ Thuật Mật Mã. Tôi có kĩ năng làm việc liên quan đến các vị trí System Engineer, Devops Engineer")}</p>
            {/* <p>
                {chuyenNgonNgu("- A person who has a passion for technology. In addition to system administration skills, I can apply installation and thinking skills to automate and optimize processing times to operate large numbers of servers.")}
            </p> */}
        </section>

    )
}

export default ProfileRS
