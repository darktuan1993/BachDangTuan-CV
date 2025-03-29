import html2pdf from "html2pdf.js";


const generateResume = () => {
  const opt = {
    margin: 0,
    filename: "bachdangtuan-cv.pdf",
    image: { type: "jpeg", quality: 1 },
    pagebreak: { mode: "avoid-all" },
    html2canvas: { scale: 4, useCORS: true },
    jsPDF: { format: "a3", orientation: "portrait" }
  };
  const areaCV = document.getElementById("area-cv");
  html2pdf(areaCV, opt);
};


const clickGene = async () => {
  // await loadImages();
  const scaleCV = () => {
    document.body.classList.add("scale-cv");
  };
  const removeScale = () => {
    document.body.classList.remove("scale-cv");
  };
  scaleCV();
  generateResume();
  setTimeout(removeScale, 3000);
};

export { clickGene, generateResume };

