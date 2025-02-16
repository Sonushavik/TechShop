import products from "./api/product.json";
import { getCartProductFromLS } from "./getCartProducts";
import {fetchQuantityFromCartLS} from "./fetchQuantityFromCartLS"
import {removeProdFromCart} from "./removeProdFromCart"
import { incrementDecrement } from "./incrementDecrement";
import { updateCartProductTotal } from "./updateCartProductTotal";
let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd) => {
        return cartProducts.some((curElem) => curElem.id === curProd.id);
});

console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
        filterProducts.forEach((curProd) => {
                const {category, id, image, name, stock, price} = curProd;

                let productClone = document.importNode(templateContainer.content, true);

                const isActualData = fetchQuantityFromCartLS(id, price)

                productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
                productClone.querySelector(".category").textContent = category;
                productClone.querySelector(".productName").textContent = name;
                productClone.querySelector(".productImage").src = image;
                productClone.querySelector(".productPrice").textContent = isActualData.price;
                productClone.querySelector(".productQuantity").textContent = isActualData.quantity

                productClone
                .querySelector(".remove-to-cart-button")
                .addEventListener("click", () => removeProdFromCart(id));

                productClone.querySelector(".stockElement").addEventListener("click", (event) => {
                        incrementDecrement(event, id, stock, price);
                });



                cartElement.appendChild(productClone);


        })
}

showCartProduct()

updateCartProductTotal()