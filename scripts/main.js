import { metalOptions } from "./metalOptions.js"
import { styleOptions } from "./styleOptions.js"
import { sizeOptions } from "./sizeOptions.js"
import { orderButton } from "./orderButton.js"
import { orders } from "./orders.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalsHTML = await metalOptions()
    const stylesHTML = await styleOptions()
    const sizeHTML = await sizeOptions()
    const orderButtonHTML = orderButton()
    const ordersHTML = await orders()

    container.innerHTML = `
        <section id="options">
            ${metalsHTML}
            ${stylesHTML}
            ${sizeHTML}
        </section>
        ${orderButtonHTML}
        <article id="order-list">
            <h2>Orders</h2>
            ${ordersHTML}
        </article>
    `
}

document.addEventListener("orderSaved", render)

render()
