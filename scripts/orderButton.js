import { placeOrder } from "./transientState.js"

const handleOrderClick = (event) => {
    if (event.target.id === "order-button") {
        placeOrder()
    }
}

export const orderButton = () => {
    document.addEventListener("click", handleOrderClick)

    let html = `
        <article class="order">
            <button type="button" id="order-button">
                Place Order
            </button>
        </article>
    `
    return html
}
