let control = document.querySelector(".control");
let onion = document.querySelector("#onion");
let cheese = document.querySelector("#cheese");
let pickle = document.querySelector("#pickle");
let salad = document.querySelector("#salad");
let tomato = document.querySelector("#tomato");
let meat = document.querySelector("#meat");
let order = document.querySelector("#order");
let reset = document.querySelector("#reset");
let total = document.querySelector(".total");
let price = 0;


meat.addEventListener("click", function (){
    let meatBox = document.createElement("div");
    meatBox.setAttribute("data-product", "meat");
    meatBox.className= "layers";
    control.append(meatBox);
    price+=5;
    h1.textContent = `Total price - ${price}$ `;
});
onion.addEventListener("click", function (){
    let onionBox = document.createElement("div");
    onionBox.setAttribute("data-product", "onion");
    onionBox.className= "layers";
    control.append(onionBox);
    price+=3;
    h1.textContent = `Total price - ${price}$ `;
});
cheese.addEventListener("click", function (){
    let cheeseBox = document.createElement("div");
    cheeseBox.setAttribute("data-product", "cheese");
    cheeseBox.className= "layers";
    control.append(cheeseBox);
    price+=3;
    h1.textContent = `Total price - ${price}$ `;
});
pickle.addEventListener("click", function (){
    let pickleBox = document.createElement("div");
    pickleBox.setAttribute("data-product", "pickle");
    pickleBox.className= "layers";
    control.append(pickleBox);
    price+=1;
    h1.textContent = `Total price - ${price}$ `;
});
tomato.addEventListener("click", function (){
    let tomatoBox = document.createElement("div");
    tomatoBox.setAttribute("data-product", "tomato");
    tomatoBox.className= "layers";
    control.append(tomatoBox);
    price+=2;
    h1.textContent = `Total price - ${price}$ `;
});
salad.addEventListener("click", function (){
    let saladBox = document.createElement("div");
    saladBox.setAttribute("data-product", "salad");
    saladBox.className= "layers";
    control.append(saladBox);
    price+=1;
    h1.textContent = `Total price - ${price}$ `;
});

reset.addEventListener("click", function (){
    price-=price;
    h1.textContent = `Total price - 0$ `;
    control.innerHTML= "";
});

let raqam = Math.floor(Math.random()*(35-10+1))+10;

order.addEventListener("click", function(){
    alert(`Your order has been accepted, your order number is   ${raqam} ` )
    price-=price;
    h1.textContent = `Total price - 0$ `;
    control.innerHTML= "";
});


let h1 = document.createElement("h1");
total.append(h1);
h1.textContent = `Total price - ${price}$ `;

control.addEventListener("click", function(e){
    control.removeChild(e.target);
})





