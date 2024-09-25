const productName = document.querySelector(".art-1 h3")
productName.innerText = "Potato"

const menuLink = document.querySelector("article a")
menuLink.innerText = "Start"

const menuContact = document.querySelectorAll("article a")
menuContact[2].innerText = "Mail Us"

const infoFire = document.querySelector(".art-2 p")
infoFire.innerText = "En härligt mjuk hoodie i eldröd kulör, med ett smakfullt tryck på ryggen i poppande vit färg."

const buttonFire = document.querySelector(".art-2 button")
buttonFire.innerText = "Köp"
buttonFire.style.backgroundColor = "dodgerblue"

const backFire = document.querySelector("article.art-2 figure");
backFire.style.backgroundColor = "blanchedalmond";

const whereNew = document.querySelector("footer article p");
whereNew.innerHTML = "Sinus skateboards<br>Hoodievägen 5<br>258 72, Tröjnäs";

const textColor = document.querySelectorAll("p");
textColor.forEach(p => { //loopa genom alla p element och ändra
  p.style.color = "darkgrey";
});

const buttonAll = document.querySelectorAll("button")
buttonAll.forEach(button => {
    button.innerText = "Add to cart"
});

const menuClass = document.querySelector("article a")
menuClass.classList.add("active")

const logoClass = document.querySelector("header img")
logoClass.classList.remove("logo")

//Add content
// Hämta rätt article-element
const menuArticle = document.querySelector("footer section article");

// Skapa HTML-strängen för About Us-länken
let html = '<a href="#">About Us</a>';

// Lägg till länken i article-elementet
menuArticle.insertAdjacentHTML("beforeend", html);

const mainElement = document.querySelector("main");
let productForrest = `
    <article class="art-4">
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
        <h2>Sinus Hoodie</h2>
        <h3>Forrest</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque ducimus enim!</p>
        <button>Add to cart</button>
    </article>
`;
mainElement.insertAdjacentHTML("beforeend", productForrest);

const logoClick = document.querySelector("header img");

logoClick.addEventListener("click", () => {
  console.log("found you");
});

const clickAsh = document.querySelector(".art-1 button");

clickAsh.addEventListener("click", () => {
  document.querySelector(".art-1 button")
  console.log("Hi, I'm article Ash")
}) 

const clickFire = document.querySelector(".art-2 button");

clickFire.addEventListener("click", () => {
  document.querySelector(".art-2 button")
  console.log("Hi, I'm article Fire")
}) 

const clickWater = document.querySelector(".art-3 button");

clickWater.addEventListener("click", () => {
  document.querySelector(".art-3 button")
  console.log("Hi, I'm article Water")
}) 

const clickForrest = document.querySelector(".art-4 button");

clickForrest.addEventListener("click", () => {
  document.querySelector(".art-4 button")
  console.log("Hi, I'm article Forrest")
}) 