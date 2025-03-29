const getImage = (imageName) => require(`./image/${imageName}`);

const dataSkillsLeft = [
    {
        id: 1,
        dotSkill: "",
        image: getImage("aoe1.png"),
        iconSkill: "bx bxl-steam skill-icon",
        nameSkill: "AOE"
    },
    {
        id: 1,
        dotSkill: "",
        image: getImage("pubg.png"),
        iconSkill: "bx bx-cycling skill-icon",
        nameSkill: "PUBG PC"
    },
];
const dataSkillsRight = [
    {
        id: 1,
        dotSkill: "",
        image: getImage("bida.png"),
        iconSkill: "bx bx-tennis-ball skill-icon",
        nameSkill: " Bida"
    },
    {
        id: 1,
        dotSkill: "",
        image: getImage("education.png"),
        iconSkill: "bx bxs-graduation skill-icon",
        nameSkill: " E-Learning"
    },
];
// eslint-disable-next-line
export default {dataSkillsLeft, dataSkillsRight};
