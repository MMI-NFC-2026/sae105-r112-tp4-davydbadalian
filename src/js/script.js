// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const selectedDetails = summary.parentElement;

    accordeon.querySelectorAll("details").forEach((det) => {
      if (det !== selectedDetails) {
        det.open = false;
      }
    });
  });
});