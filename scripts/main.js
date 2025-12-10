import { metalOptions } from "./metalOptions.js"
import { styleOptions } from "./styleOptions.js"
import { sizeOptions } from "./sizeOptions.js"
import { orderButton } from "./orderButton.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalsHTML = await metalOptions()
    const stylesHTML = await styleOptions()
    const sizeHTML = await sizeOptions()
    const orderButtonHTML = orderButton()

    container.innerHTML = `
        <section id="options">
            ${metalsHTML}
            ${stylesHTML}
            ${sizeHTML}
        </section>
        ${orderButtonHTML}
    `
}

render()
