const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 139,
        colors: [
            {
                code: "black",
                img: "./images/air.png",
            },
            {
                code: "darkblue",
                img: "./images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Blazer",
        price: 119,
        colors: [
            {
                code: "light gray",
                img: "./images/blazer.png",
            },
            {
                code: "green",
                img: "./images/blazer2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Jordan",
        price: 129,
        colors: [
            {
                code: "light gray",
                img: "./images/jordan.png",
            },
            {
                code: "green",
                img: "./images/jordan2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "black",
                img: "./images/hippie2.png",
            },
            {
                code: "gray",
                img: "./images/hippie.png",
            },
        ],
    },
    {
        id: 5,
        title: "Crater",
        price: 109,
        colors: [
            {
                code: "green",
                img: "./images/crater2.png",
            },
            {
                code: "black",
                img: "./images/crater.png",
            },
        ],
    },
];

let chosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      //change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;

      //change the chosen product
      chosenProduct = products[index];

      //change text of currentProduct
      currentProductTitle.textContent = chosenProduct.title;
      currentProductPrice.textContent = "$" + chosenProduct.price;
      currentProductImg.src = chosenProduct.colors[0].img;

      //assign new colors

      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = chosenProduct.colors[index].code;
      });
    });
  });

  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) =>{
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
  });

  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

  productButton.addEventListener("click", () =>{
    payment.style.display = "flex";
  });

  close.addEventListener("click", () =>{
    payment.style.display = "none";
  });

