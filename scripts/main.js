import { metalOptions } from "./metalOptions.js"
import { styleOptions } from "./styleOptions.js"
import { sizeOptions } from "./sizeOptions.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalsHTML = await metalOptions()
    const stylesHTML = await styleOptions()
    const sizeHTML = await sizeOptions()

    container.innerHTML = `
        <section id="options">
            ${metalsHTML}
            ${stylesHTML}
            ${sizeHTML}
        </section>
    `
}

render()
