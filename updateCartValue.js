const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (arrLocalStorageProduct) => {
        cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${arrLocalStorageProduct.length}</i>`
}