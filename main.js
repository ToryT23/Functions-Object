//Given the following object
// 1. Write a function that accepts an object as an argument and returns an that object augmented with inStock = true;
// 1. Write a function that displays the new object on the DOM. Show each property as a name: value pair.


const cart = {
	name: "Chocolate Ice Cream",
	type: "dessert",
	price: 3.59,
	servings: 2
}

const addItem = (cartObj) => {
    cartObj.instock = true

  return cartObj
}

const cartFull = (cartObj) => {
    // select a place in html to show info
    const domElement = document.querySelector(".choco")

    // take that thing and insert into html
    domElement.innerHTML+= `<div> Name ${cartObj.name} </div>
   <div>type ${cartObj.type}</div> 
   <div>price ${cartObj.price} </div> 
   <diV>serving ${cartObj.servings}</diV>
   <div>instock ${cartObj.instock}</div>
   `
   }

addItem(cart)
cartFull(cart)


// const objHTML = (obj) => {
//     let htmlRep = `<div>`;
//     for (const [key, value] of Object.entries(obj)) {
//        htmlRep += `<p>${key}: ${value}</p>`;
//     }
//     htmlRep += `</div>`;
//     return htmlRep;
//   }