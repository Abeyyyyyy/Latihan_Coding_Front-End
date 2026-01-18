let fontSize = 16;
const ingredients = document.getElementById("ingredients");

// Cetak resep
function printRecipe() {
  window.print();
}

// Perbesar font
function perbesarFont() {
  fontSize += 2;
  ingredients.style.fontSize = fontSize + "px";
}

// Perkecil font
function perkecilFont() {
  fontSize -= 2;
  ingredients.style.fontSize = fontSize + "px";
}

// Klik bahan → highlight
ingredients.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("highlight");
  }
});
