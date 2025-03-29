
const getImage = (imageName) => require(`./image/${imageName}`);
const dataCer = [
    {
        title: "Certified Kubernetes Admin ",
        image: getImage("cka.png"),
        icon: "bx bxl-kubernetes skill-icon ",
        link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/8760443b-52ec-49f8-b11e-67e4215c09a4-bach-dang-tuan-afdd782c-c6f2-4560-8f04-c5cd86278533-certificate.pdf"
    },
    {
        title: "Certified Kubernetes Security Specialist",
        image: getImage("cks.png"),
        icon: "bx bx-certification skill-icon",
        link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/8760443b-52ec-49f8-b11e-67e4215c09a4-bach-dang-tuan-ac76fb7e-06e2-486f-a70c-dbe1265b5b4d-certificate.pdf"
    },
    {
        title: "Kubernetes and Cloud Native Associate",
        image: getImage("kcna.png"),
        icon: "bx bx-certification skill-icon",
        // link: "https://drive.google.com/file/d/10D4SXAqFutRzQ-yRW7LCl5Ph-kCeazva/view"
    },
    {
        title: "Certified Kubernetes Application Developer",
        image: getImage("ckad.png"),
        icon: "bx bx-certification skill-icon",
        // link: "https://drive.google.com/file/d/10D4SXAqFutRzQ-yRW7LCl5Ph-kCeazva/view"
    },
    {
        title: "Prometheus Associate Certificate",
        image: getImage("pca.png"),
        icon: "bx bx-certification skill-icon",
        link: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/8760443b-52ec-49f8-b11e-67e4215c09a4-bach-dang-tuan-7340d446-10fd-49fc-93c6-490dda50e909-certificate.pdf"
    },
    {
        title: "Rancher RKE2 Competency",
        image: getImage("rke2.webp"),
        icon: "bx bxl-gitlab skill-icon",
        link: "https://www.rancher.academy/certificates/l1zd015s1s"
    },
    {
        title: "GitLab CI Competency",
        image: getImage("gitlab.png"),
        icon: "bx bxl-gitlab skill-icon",
        link: "https://ti-user-certificates.s3.amazonaws.com/72109ec1-52dd-4663-9df4-754a8a1d0bff/83f73559-7cdb-40c4-918b-66f59d989eb6-bach-dang-tuan-bc1c646a-942e-47d3-ba10-c8fc747d662f-certificate.pdf"
    },
    {
        title: "Istio Administrator by Tetrate",
        image: getImage("istio.png"),
        icon: "bx bx-certification skill-icon",
        // link: "https://academy.tetrate.io/courses/istio-fundamentals"
    },
    {
        title: "Fortinet Certified Associate ",
        image: getImage("fortinet.webp"),
        icon: "bx bx-certification skill-icon",
        // link: "https://credly.com/badges/ae39e201-65f9-424b-8527-da066aea6898"
    },
    {
        title: "CCNA Routing & Switching ",
        image: getImage("cisco.png"),
        icon: "bx bx-certification skill-icon",
        link: "https://cp.certmetrics.com/cisco/en/public/verify/credential/418124170073IOWK"
    },
    // {
    //     title: "MCITP Certificate",
    //     image: "https://media.loveitopcdn.com/3807/microsoft-logo.jpg",
    //     icon: "bx bxl-windows skill-icon",
    //     link: "https://drive.google.com/file/d/1fvNvbz_WpKxLlu4tqgPRKYDWqg1Vv7V3/view"
    // },
];
export default dataCer;
