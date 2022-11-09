/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("picture-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

let counter = 1;

const advanceContent = () => {
  if (counter < 3) {
    counter++;
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.remove("hidden");
  }
};

const returnContent = () => {
  if (counter > 1) {
    let idToSelect = "#slide-" + counter;
    document.querySelector(idToSelect).classList.add("hidden");
    counter--;
  }
};

const downloadChecklist = () => {
  let contentToPrint = document.querySelector("#checklist")
  
  html2canvas(contentToPrint, { }).then(
  (canvas) => {
    let a = document.createElement("a");
    a.download = "checklist.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
    }
  );
};

