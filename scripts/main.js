import { metalOptions } from "./metalOptions.js"

const container = document.querySelector("#container")

const render = async () => {
    const metalsHTML = await metalOptions()

    container.innerHTML = `
        <section id="options">
            ${metalsHTML}
        </section>
    `
}

render()
