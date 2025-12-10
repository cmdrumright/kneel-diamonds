import { setMetalChoice } from "./transientState.js"

const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetalChoice(parseInt(event.target.value))
    }
}

export const metalOptions = async () => {
    document.addEventListener("change", handleMetalChoice)

    const response = await fetch("http://localhost:8088/metals")
    const options = await response.json()

    let html = `
        <article id="metal-options" class="items">
            <h2>Metals</h2>
    `
    html += options.map((option) => {
        return `
            <label class="Radio" for="metal-${option.id}">
                <input class="Radio-input" type="radio" name="metal" value="${option.id}" > ${option.metal}
            </label>
        `
    }).join("")
    html += `
        </article>
    `
    return html
}
