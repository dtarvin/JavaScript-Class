const paragraphs = document.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2], paragraphs[0]);
const fourthParagraph = document.createElement("p");
document.body.appendChild(fourthParagraph);
fourthParagraph.textContent = "Four";

function replaceImages() {
  const images = document.body.getElementsByTagName("img");

  for (let i = images.length - 1; i >= 0; i--) {
    const image = images[i];
    if (image.alt) {
      const text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}
replaceImages();