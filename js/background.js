const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
  "img10.jpg",
  "img11.jpg",
  "img12.jpg",
  "img13.jpg",
  "img14.jpg",
  "img15.jpg",
  "img16.jpg",
  "img17.jpg",
  "img18.jpg",
  "img19.jpg",
  "img20.jpg",
  "img21.jpg",
  "img22.jpg",
  "img23.jpg",
  "img24.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.src = `img/${chosenImage}`;
bgImage.style.width = "100%";
bgImage.style.height = "100%";
bgImage.style.objectFit = "cover";
bgImage.style.position = "fixed";
bgImage.style.top = "0";
bgImage.style.left = "0";
bgImage.style.zIndex = "-1";

document.body.appendChild(bgImage);

/*
for savings
"img25.jpg"
"img26.jpg",
"img27.jpg",
"img28.jpg",
"img29.jpg",
"img30.jpg",
"img31.jpg",
"img32.jpg",
"img33.jpg",
"img34.jpg",
"img35.jpg",
"img36.jpg",
"img37.jpg",
"img38.jpg",
*/
