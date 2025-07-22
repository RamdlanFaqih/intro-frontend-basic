const testDom = document.getElementById("test-dom");

const testClass = document.getElementsByClassName("test-class");
console.log("get by class", testClass);

const tagName = document.getElementsByTagName("a");
console.log("get by tag", tagName);

const querySelector = document.querySelector("#test-dom");
console.log("query selector", querySelector);

const id = document.getElementById("manipulasi");
id.textContent = "Hello World";
id.style.color = "red";
id.style.fontSize = "24px";

const btn = document.getElementById("beli-semua");

const manipulation = document.querySelectorAll("#test-dom");

let uangDiDompet = 0;
const input = document.getElementById("input-text");
input.addEventListener("input", (event) => {
  console.log(event.target.value);
  uangDiDompet = event.target.value;
});

const hargaSamsung = 10499;

btn.addEventListener("click", () => {
  if (uangDiDompet < hargaSamsung) {
    alert("uang kurang");
    // satu lagi kondisi untuk ngecek uangnya lebih atau nggak
  } else {
    // kondisi uangnya pas
    alert("Pembelian Berhasil");
  }
});

const addItemBtn = document.getElementById("add-item");
const removeItemBtn = document.getElementById("remove-item");
const boxContainer = document.getElementById("box-container");

addItemBtn.addEventListener("click", () => {
  const gambar = document.createElement("img");
  gambar.src = "../assets/img/product/samsungs22.png";
  gambar.id = "item";
  gambar.style.width = "100px";
  gambar.style.height = "100px";
  gambar.style.objectFit = "contain";

  boxContainer.appendChild(gambar);
});

removeItemBtn.addEventListener("click", () => {
  const gambar = document.getElementById("item");
  console.log(gambar);
  gambar.remove();
});

// show data

const dataProduct = [
  {
    discount: "56%",
    productName: "Galaxy S22 Ultra",
    currentPrice: "₹32999",
    image: "../assets/img/product/samsungs22.png",
    originalPrice: "₹74999",
    savings: "Save - ₹32999",
  },
  {
    discount: "56%",
    productName: "Galaxy Note Ultra",
    currentPrice: "₹32999",
    image: "../assets/img/product/samsungs22.png",
    originalPrice: "₹74999",
    savings: "Save - ₹32999",
  },
  {
    discount: "56%",
    productName: "Samsung",
    currentPrice: "₹32999",
    image: "../assets/img/product/samsungs22.png",
    originalPrice: "₹74999",
    savings: "Save - ₹32999",
  },
];

const productList = document.getElementById("product-list")

dataProduct.forEach(value => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.innerHTML =`
    <div class="discount-badge">${value.discount} OFF</div>
    <div class="product-image">
        <img src=${value.image} alt=${value.productName} />
    </div>
    <div class="product-info">
        <h3 class="product-name">${value.productName}</h3>
    </div>
    <button>Tambah Keranjang</button>
    `;

    // Galaxy S22 Ultra ditambahkan ke keranjang

    productList.appendChild(productCard)
})