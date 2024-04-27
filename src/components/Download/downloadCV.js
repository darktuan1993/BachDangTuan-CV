import html2pdf from "html2pdf.js";

const generateResume = () => {
  const opt = {
    margin: 0,
    filename: "bachdangtuan-cv.pdf",
    image: { type: "jpeg", quality: 0.99 },
    pagebreak: { mode: "avoid-all" },
    html2canvas: { scale: 4 },
    jsPDF: { format: "a3", orientation: "" },
  };
  const areaCV = document.getElementById("area-cv");
  html2pdf(areaCV, opt);
};

const clickGene = () => {
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

export { clickGene, generateResume};

