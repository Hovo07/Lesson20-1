let x = document.getElementById("foods");

let arr = [
  [
    "./assets/images/sandwich.jpg",
    "The Perfect Sandwich, A Real NYC Classic",
    "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
  ],
  [
    "./assets/images/steak.jpg",
    "Let Me Tell You About This Steak",
    "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.",
  ],
  [
    "./assets/images/cherries.jpg",
    "Cherries, interrupted",
    "Lorem ipsum text praesent tincidunt ipsum lipsum.",
    "What else?",
  ],
  [
    "./assets/images/wine.jpg",
    "Once Again, Robust Wine and Vegetable Pasta",
    "Lorem ipsum text praesent tincidunt ipsum lipsum.",
  ],
  [
    "./assets/images/popsicle.jpg",
    "All I Need Is a Popsicle",
    "Lorem ipsum text praesent tincidunt ipsum lipsum.",
  ],
  [
    "./assets/images/salmon.jpg",
    "Salmon For Your Skin",
    "Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.",
  ],
  [
    "./assets/images/sandwich (1).jpg",
    "The Perfect Sandwich, A Real Classic",
    "Just some random text, lorem ipsum text praesent tincidunt ipsum lipsum.",
  ],
  [
    "./assets/images/croissant.jpg",
    "Le French",
    "Lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum.",
  ],
];

for (let i = 0; i < arr.length; i++) {
  let y = document.createElement("div");

  y.style.width = "24%";
  y.style.display = "flex";
  y.style.flexDirection = "column";
  // y.className = ''
  // y.classList.add('anuny')
  // y.classList.remove('jnjel')

  let p = document.createElement("div");

  p.style.width = "100%";
  p.style.height = "400px";

  let t = document.createElement("img");

  t.src = arr[i][0];
  t.style.width = "100%";
  t.style.height = "100%";

  let a = document.createElement("div");

  a.style.display = "flex";
  a.style.flexDirection = "column";
  a.style.gap = "20px";
  a.style.padding = "10px 0";

  let r = document.createElement("h3");

  r.style.fontSize = "24px";
  
  r.style.fontFamily = "'Raleway', sans-serif";
  r.style.fontWeight = "600";
  r.style.textAlign = "center";
  r.innerText = arr[i][1];

  let m = document.createElement("p");

  m.style.fontSize = "15px";
  m.style.color = "gray";
  
  m.style.fontFamily = "'Raleway', sans-serif";
  m.style.fontWeight = "400";
  m.style.textAlign = "center";
  m.innerText = arr[i][2];

  x.appendChild(y);
  y.appendChild(p);
  p.appendChild(t);
  y.appendChild(a);
  a.appendChild(r);
  a.appendChild(m);

  if (i === 2) {
    let o = document.createElement("p");

    o.style.fontSize = "15px";
    
    o.style.fontFamily = "'Raleway', sans-serif";
    o.innerText = arr[i][3];
    o.style.textAlign = "center";

    a.appendChild(o);
  }
}

let z = document.getElementById("foot1");

let arr1 = [
  "FOOTER",
  "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
  "Powered by",
  "https://www.w3schools.com/w3css/default.asp",
];


  let s = document.createElement("h3");

  s.style.fontSize = "24px";
  s.style.fontFamily = "'Raleway', sans-serif";
  s.style.fontWeight = "600";
  
  s.innerText = arr1[0];

  let y = document.createElement("p");

  y.style.fontSize = "15px";
  y.style.fontFamily = "'Raleway', sans-serif";
  y.style.fontWeight = "400";
  
  y.innerText = arr1[1];

  let m = document.createElement("p");

  m.style.fontSize = "15px";
  m.style.fontFamily = "'Raleway', sans-serif";
  m.style.fontWeight = "400";
  
  m.innerText = arr1[2];

  z.appendChild(s);
  z.appendChild(y);
  z.appendChild(m);

